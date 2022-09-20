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

  /** loadQuery 초기화를 통해 ref 생성, disposeQuery로 cleanup */
  useEffect(() => {
    loadQuery({});
    return () => {
      disposeQuery();
    };
  }, [disposeQuery, loadQuery]);

  return (
    <div className={"prose lg:prose-xl"}>
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

  const reset = () => {
    refetch({ query: "" });
    setSearch("");
  };

  const {
    search: { edges },
  } = data;

  return (
    <div className={"bg-white shadow-md rounded px-8 mt-6 pb-8 mb-4"}>
      <h2 onClick={reset} className={"divide-x cursor-pointer"}>
        Search Github Repository
      </h2>
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
            value={search}
          />
          <input className={submitButtonStyle()} type="submit" />
        </div>
      </form>
      <div className={"pt-12 "} />
      <div className={"divide-y divide-solid"}>
        <SpreadEdges edges={edges} />
      </div>
      <button
        disabled={isLoadingNext || !hasNext}
        onClick={loadMore}
        className={submitButtonStyle()}
      >
        {hasNext ? "더 보기" : "더 이상의 데이터가 없습니다."}
        {isLoadingNext && <Loading />}
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
      <div className={"pb-7"} key={`index__${index}__cursor__${cursor}`}>
        <div>
          <div className={"font-bold py-4"}>{name}</div>
          <div className={"py-4"}>{description}</div>
          {(isInFlightToRemoveStar || isInFlightToAddStar) &&
          selectedRepoId === id ? (
            <Loading />
          ) : (
            <button
              className={buttonStyle(viewerHasStarred)}
              onClick={() => handleOnClick(id, viewerHasStarred)}
            >
              ⭐️&nbsp;&nbsp; {stargazerCount}{" "}
              {viewerHasStarred ? "starred!" : ""}
            </button>
          )}
        </div>
      </div>
    );
  });
}

const buttonStyle = (viewerHasStarred) => `
 ${
   viewerHasStarred
     ? "text-white bg-green-600 dark:bg-green-500"
     : "text-gray-800 bg-gray-400 dark:bg-gray-300"
 } 
hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded text-sm px-5 py-2.5 text-center mr-2 mb-2  dark:hover:bg-green-700 dark:focus:ring-green-800
`;

const submitButtonStyle = () => `
              shadow appearance-none border rounded  hover:cursor-pointer py-1 px-3 text-gray-700 rounded bg-gray-200
`;
