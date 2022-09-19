import {
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { Suspense, useCallback, useEffect, useState } from "react";
import SearchRepoQuery from "./__generated__/SearchRepoQuery.graphql";
import SearchRepoFragment from "./__generated__/SearchRepoResults_repos.graphql";

export function Search() {
  const [queryRef, loadQuery, disposeQuery] = useQueryLoader(SearchRepoQuery);

  /** loadQuery 초기화, disposeQuery로 cleanup */
  useEffect(() => {
    loadQuery({});
    return () => {
      disposeQuery();
    };
  }, []);

  return (
    <div>
      <h2>Search!</h2>
      {queryRef && (
        <Suspense fallback={<p>LOADING...</p>}>
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
    loadNext(5);
  }, [isLoadingNext, loadNext]);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    refetch({ query: search });
  };

  const {
    search: { edges },
  } = data;

  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <input type="submit" />
      </form>
      {edges.map((edge, index) => {
        const {
          node: { cursor, name, description, stargazerCount },
        } = edge;
        return (
          <div key={`index__${index}__cursor__${cursor}`}>
            <div>
              <div>{name}</div>
              <div>{description}</div>
              <div>⭐️{stargazerCount}</div>
            </div>
          </div>
        );
      })}

      <button disabled={isLoadingNext || !hasNext} onClick={loadMore}>
        {hasNext ? "더 보기" : "더 이상의 데이터가 없습니다."}
      </button>
    </div>
  );
}
