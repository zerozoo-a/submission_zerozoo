import { usePreloadedQuery } from "react-relay";
import { SearchQuery } from "./Search.graphql";

export const List = ({ queryReference }) => {
  const data = usePreloadedQuery(SearchQuery, queryReference);
  console.log("data", data);
  const {
    search: {
      edges,
      repositoryCount,
      pageInfo: { endCursor, hasNextPage },
    },
  } = data;

  return (
    <div>
      {edges.map(
        ({ node: { id, name, description, stargazerCount } }, index) => (
          <div key={`searchData${index}__${id}`}>
            <div>{name}</div>
            <div>{description}</div>
            <div>⭐️ {stargazerCount}</div>
          </div>
        )
      )}

      {hasNextPage && <FetchMore hasNextPage={hasNextPage} />}
    </div>
  );
};

const FetchMore = ({ hasNextPage }) => {
  return (
    <>
      <button disabled={!hasNextPage}> 더 보기 </button>
    </>
  );
};
