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
  const [query, setQuery] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
    loadQuery({ query });
  };

  useEffect(() => {
    loadQuery({});
    return () => {
      disposeQuery();
    };
  }, []);

  return (
    <div>
      <h2>Search!</h2>
      <form onSubmit={handleOnSubmit}>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" />
      </form>

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
  const { data, loadNext, isLoadingNext } = usePaginationFragment(
    SearchRepoFragment,
    query
  );

  const loadMore = useCallback(() => {
    if (isLoadingNext) return;
    loadNext(5);
  }, [isLoadingNext, loadNext]);

  console.log("data >>>", data);
  const {
    search: { edges },
  } = data;

  return (
    <div>
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
      <button onClick={loadMore}>LOAD MORE?</button>
    </div>
  );
}
