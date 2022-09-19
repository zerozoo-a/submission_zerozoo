import graphql from "babel-plugin-relay/macro";

export const SearchRepoQuery = graphql`
  query SearchRepoQuery {
    ...SearchRepoResults_repos
  }
`;

export const fragment = graphql`
  fragment SearchRepoResults_repos on Query
  @argumentDefinitions(
    after: { type: "String" }
    first: { type: "Int", defaultValue: 5 }
    before: { type: "String" }
    last: { type: "Int" }
    query: { type: "String", defaultValue: "react" }
    type: { type: "SearchType", defaultValue: REPOSITORY }
  )
  @refetchable(queryName: "SearchPaginationQuery") {
    search(
      query: $query
      after: $after
      first: $first
      before: $before
      last: $last
      type: $type
    ) @connection(key: "Repo__search") {
      edges {
        node {
          ... on Repository {
            name
            description
            stargazerCount
          }
        }
      }
    }
  }
`;
