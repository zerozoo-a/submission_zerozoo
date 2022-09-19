/* @flow */
import {
  useMutation,
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { Suspense, useCallback, useEffect, useState } from "react";

/** queries */
import SearchRepoQuery from "./__generated__/SearchRepoQuery.graphql";
import SearchRepoFragment from "./__generated__/SearchRepoResults_repos.graphql";
import SearchAddStarMutation from "./__generated__/SearchAddStarMutation.graphql";
import SearchRemoveStarMutation from "./__generated__/SearchRemoveStarMutation.graphql";

/** types */
import type { SearchRepoQueryType } from "SearchRepoQuery.graphql";
import type { PreloadedQuery } from "react-relay";

type Props = {
  searchRef: PreloadedQuery<SearchRepoQueryType>,
  searchQuery: SearchRepoQueryType,
};

export function Loading() {
  return <p>Loading...🐢</p>;
}

export function Search() {
  const [queryRef, loadQuery, disposeQuery] =
    useQueryLoader<SearchRepoQueryType>(SearchRepoQuery);

  /** loadQuery 초기화, disposeQuery로 cleanup */
  useEffect(() => {
    loadQuery({});
    return () => {
      disposeQuery();
    };
  }, [disposeQuery, loadQuery]);

  return (
    <div className={"prose lg:prose-xl"}>
      <h2 className={"divide-x"}>Search Github Repository</h2>
      {queryRef && (
        <Suspense fallback={<Loading />}>
          <SearchRepoResults
            searchQuery={SearchRepoQuery}
            searchRef={queryRef}
          />
        </Suspense>
      )}
    </div>
  );
}

function SearchRepoResults({ searchQuery, searchRef }) {
  const query = usePreloadedQuery(searchQuery, searchRef);

  const { data, loadNext, isLoadingNext, refetch, hasNext } =
    usePaginationFragment(SearchRepoFragment, query);

  const [search, setSearch] = useState("");

  const loadMore = useCallback(() => {
    if (isLoadingNext) return;
    loadNext(5); // 다음 불러들일 데이터의 개수
  }, [isLoadingNext, loadNext]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    refetch({ query: search });
  };

  const {
    search: { edges },
  } = data;

  return (
    <div className={"bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"}>
      <form onSubmit={handleOnSubmit}>
        <div className={"mb-4"}>
          <label
            className={"text-gray-700 text-sm font-bold mb-2 text-lg"}
            htmlFor={"searchGitHubRepository"}
          >
            검색 🔍
          </label>
        </div>
        <div className={"h-38px"}>
          <input
            id={"searchGitHubRepository"}
            type="text"
            className={
              "shadow appearance-none w-4/6 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }
            onChange={(e) => setSearch(e.target.value)}
          />
          <input
            className={
              "shadow appearance-none border rounded  hover:cursor-pointer py-1 px-3 text-gray-700 rounded bg-gray-200 "
            }
            type="submit"
          />
        </div>
      </form>
      <SpreadEdges edges={edges} />
      <button disabled={isLoadingNext || !hasNext} onClick={loadMore}>
        {hasNext ? "더 보기" : "더 이상의 데이터가 없습니다."}
      </button>
    </div>
  );
}

function SpreadEdges({ edges }) {
  const [selectedRepoId, setSelectedRepoId] = useState("");
  const [commitToAddStar, isInFlightToAddStar] = useMutation(
    SearchAddStarMutation
  );
  const [commitToRemoveStar, isInFlightToRemoveStar] = useMutation(
    SearchRemoveStarMutation
  );

  const handleOnClick = (starrableId, viewerHasStarred) => {
    setSelectedRepoId(starrableId);

    switch (!viewerHasStarred) {
      case true:
        commitToAddStar({
          variables: {
            starrableId,
          },
          onError(error) {
            console.error("ERROR OCCURRED! in add star", error);
          },
          onCompleted(data) {
            console.log("onCompleted!", data);
          },
        });

        return;
      case false:
        commitToRemoveStar({
          variables: {
            starrableId,
          },
          onError(error) {
            console.error("ERROR OCCURRED! in add star", error);
          },
          onCompleted(data) {
            console.log("onCompleted!", data);
          },
        });
        return;
      default:
        return;
    }
  };

  return edges.map((edge, index) => {
    const {
      node: { id, cursor, name, description, stargazerCount, viewerHasStarred },
    } = edge;

    return (
      <div key={`index__${index}__cursor__${cursor}`}>
        <div>
          <div>{name}</div>
          <div>{description}</div>
          {(isInFlightToRemoveStar || isInFlightToAddStar) &&
          selectedRepoId === id ? (
            <Loading />
          ) : (
            <button onClick={() => handleOnClick(id, viewerHasStarred)}>
              ⭐️{stargazerCount} {!viewerHasStarred ? "별 주기!" : "별 취소"}
            </button>
          )}
        </div>
      </div>
    );
  });
}
