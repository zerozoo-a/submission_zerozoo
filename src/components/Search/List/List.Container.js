import { Suspense } from "react";
import { usePreloadedQuery, useQueryLoader } from "react-relay";
import { SearchMoreQuery, SearchQuery } from "../Search.graphql";
import { List, MoreList } from "./List";

export const ListContainer = ({ query, queryReference }) => {
  const data = usePreloadedQuery(SearchQuery, queryReference);

  const [searchMoreQueryReference, loadSearchMoreQuery] =
    useQueryLoader(SearchMoreQuery);

  console.log("data outer >>>", data);
  const {
    search: {
      edges,
      repositoryCount,
      pageInfo: { endCursor, hasNextPage },
    },
  } = data;

  const handleOnClick = (e) => {
    e.preventDefault();
    loadSearchMoreQuery({ query, after: endCursor });
  };

  return (
    <div>
      <List edges={edges} />
      <Suspense fallback={"LOADING..."}>
        {searchMoreQueryReference !== null && (
          <MoreList searchMoreQueryReference={searchMoreQueryReference} />
        )}
      </Suspense>
      {hasNextPage && (
        <SearchMoreButton
          handleOnClick={handleOnClick}
          hasNextPage={hasNextPage}
        />
      )}
    </div>
  );
};

const SearchMoreButton = ({ hasNextPage, handleOnClick }) => {
  return (
    <>
      <button onClick={handleOnClick} disabled={!hasNextPage}>
        더 보기
      </button>
    </>
  );
};
