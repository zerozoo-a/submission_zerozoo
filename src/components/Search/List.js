import { usePreloadedQuery } from "react-relay";
import { SearchQuery } from "./Search.graphql";

export const List = ({ queryReference }) => {
  const data = usePreloadedQuery(SearchQuery, queryReference);

  return (
    <div>
      {data.search?.edges.map(({ node }, index) => (
        <div key={`searchData${index}__${node.id}__`}>
          <div>{node.name}</div>
          <div>{node.description}</div>
          <div>⭐️ {node.stargazerCount}</div>
        </div>
      ))}
    </div>
  );
};
