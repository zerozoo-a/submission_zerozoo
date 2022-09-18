import { useFragment, usePreloadedQuery } from "react-relay";
import { searchFragment, SearchMoreQuery } from "../Search.graphql";
import { useRef, useEffect, useMemo, useState } from "react";
import { SearchMoreButton } from "./List.Container";

export const List = ({ edges }) => {
  // console.log("edges >>>", edges);
  return edges.map(
    ({ node: { id, name, description, stargazerCount } }, index) => (
      <div key={`searchData${index}__${id}`}>
        <div>{name}</div>
        <div>{description}</div>
        <div>⭐️ {stargazerCount}</div>
      </div>
    )
  );
};

export const MoreList = ({ searchMoreQueryReference, handleSetNewCursor }) => {
  const data = usePreloadedQuery(SearchMoreQuery, searchMoreQueryReference);
  const {
    search: {
      edges,
      repositoryCount,
      pageInfo: { endCursor, hasNextPage },
    },
  } = data;
  const acc = useRef([]);

  const dataFrag = useFragment(searchFragment);
  // console.log("data Frag", dataFrag);

  useEffect(() => {
    handleSetNewCursor(endCursor);
    acc.current.push(data);
    // console.log("befores >>> ", acc.current);
  }, [endCursor]);

  return <List edges={edges} />;
};
