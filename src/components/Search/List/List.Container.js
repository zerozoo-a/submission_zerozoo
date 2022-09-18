import { useState, Suspense, useEffect } from "react";
import { usePreloadedQuery, useQueryLoader } from "react-relay";
import { SearchMoreQuery, SearchQuery } from "../Search.graphql";
import { List, MoreList } from "./List";

export const ListContainer = ({ query, queryReference }) => {
  const data = usePreloadedQuery(SearchQuery, queryReference);
  const [searchMoreQueryReference, loadSearchMoreQuery] =
    useQueryLoader(SearchMoreQuery);

  // const {
  //   search: {
  //     edges,
  //     repositoryCount,
  //     pageInfo: { endCursor, hasNextPage },
  //   },
  // } = data;
  // const [newEndCursor, setNewCursor] = useState(endCursor);
  //
  // const handleOnClick = (e, endCursor) => {
  //   e.preventDefault();
  //   loadSearchMoreQuery({ query, after: endCursor });
  // };
  //
  // const handleSetNewCursor = (endCursor) => {
  //   setNewCursor(endCursor);
  // };
  //
  // useEffect(() => {}, [newEndCursor]);

  console.log("result data? ", data);
  return (
    <div>
      ?{/*<List edges={edges} />*/}
      {/*<Suspense fallback={"LOADING..."}>*/}
      {/*  {searchMoreQueryReference !== null && (*/}
      {/*    <MoreList*/}
      {/*      searchMoreQueryReference={searchMoreQueryReference}*/}
      {/*      handleSetNewCursor={handleSetNewCursor}*/}
      {/*    />*/}
      {/*  )}*/}
      {/*</Suspense>*/}
      {/*<SearchMoreButton*/}
      {/*  handleOnClick={(e) => handleOnClick(e, newEndCursor)}*/}
      {/*  hasNextPage={hasNextPage}*/}
      {/*/>*/}
    </div>
  );
};

export const SearchMoreButton = ({ handleOnClick, hasNextPage }) => {
  return (
    <>
      <button onClick={handleOnClick} disabled={!hasNextPage}>
        더 보기
      </button>
    </>
  );
};
