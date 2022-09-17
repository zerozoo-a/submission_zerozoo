import { usePreloadedQuery } from "react-relay";
import { SearchMoreQuery } from "../Search.graphql";

export const List = ({ edges }) => {
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

export const MoreList = ({ searchMoreQueryReference }) => {
  const data = usePreloadedQuery(SearchMoreQuery, searchMoreQueryReference);
  console.log("data inner >>>", data);

  return <div>hola!</div>;
};
