import HomeRootSearchQuery from "./__generated__/HomeRootSearchQuery.graphql";
import {
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { Suspense, useState } from "react";
import { HomeSearchFragment } from "./HomeRoot";
import graphql from "babel-plugin-relay/macro";
import SearchQuery from "./__generated__/HomeRootSearchQuery.graphql";
import SearchMoreQuery from "./__generated__/SearchMoreQuery.graphql";

export function Search({ nodes }) {
  const [queryRef, loadQuery] = useQueryLoader(SearchQuery);
  const [query, setQuery] = useState("");

  const handleSearchOnClick = (e) => {
    e.preventDefault();
    loadQuery({ query });
  };

  return (
    <div>
      <h2>Search!</h2>
      <form>
        <input type="text" onChange={(e) => setQuery(e.target.value)} />
        <input type="submit" onClick={handleSearchOnClick} />
      </form>

      {/*처음 접근시 보여줄 값*/}
      {/*{nodes.map((node) => (*/}
      {/*  <div key={`${node.__id}`}>*/}
      {/*    <HomeSearchFragment node={node} />*/}
      {/*  </div>*/}
      {/*))}*/}

      <Suspense fallback={"LOADING"}>
        {queryRef !== null && <DisplayFetchedData queryRef={queryRef} />}
      </Suspense>
      <Suspense fallback={"LOADING"}>
        {queryRef !== null && (
          <ShowMoreButton query={query} queryRef={queryRef} />
        )}
      </Suspense>
    </div>
  );
}

function ShowMoreButton({ query, queryRef }) {
  const data = usePreloadedQuery(SearchQuery, queryRef);
  const [searchMoreQueryRef, loadQuery] = useQueryLoader(SearchMoreQuery);
  console.log("data????", data);
  const handleOnClick = () => {
    loadQuery({ query, first: 10, after: data.search.pageInfo.endCursor });
  };

  return (
    <div>
      <LoadMore queryRef={searchMoreQueryRef} />
      <button onClick={handleOnClick}>더 보기</button>
    </div>
  );
}
function LoadMore({ queryRef }) {
  console.log("queryRef", queryRef);
  const data = usePaginationFragment(
    graphql`
      fragment SearchLoadMore_repository on Query
      @refetchable(queryName: "SearchPaginationQuery") {
        search(query: $query, first: $first, after: $after, type: REPOSITORY)
          @connection(key: "RepositoryList_query__search") {
          edges {
            node {
              ... on Repository {
                id
                name
                description
              }
            }
          }
        }
      }
    `,
    queryRef
  );
  console.log("data?????", data);

  return <div>hola?</div>;
}
function DisplayFetchedData({ queryRef }) {
  const data = usePreloadedQuery(SearchQuery, queryRef);
  const {
    search: { nodes },
  } = data;

  return (
    <>
      {nodes.map((node, index) => (
        <div key={node.__id}>
          <HomeSearchFragment node={node} index={index} />
        </div>
      ))}

      {/*<LoadMore queryRef={data.search} />*/}
    </>
  );
}
