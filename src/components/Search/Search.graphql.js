import graphql from "babel-plugin-relay/macro";

export const SearchQuery = graphql`
  query SearchQuery($query: String = "") {
    search(type: REPOSITORY, query: $query, first: 1) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            stargazerCount
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
      repositoryCount
    }
  }
`;

export const SearchMoreQuery = graphql`
  query SearchMoreQuery($query: String = "", $after: String = "") {
    search(type: REPOSITORY, query: $query, first: 1, after: $after) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            stargazerCount
          }
        }
        cursor
      }
      pageInfo {
        endCursor
        hasNextPage
      }
      repositoryCount
    }
  }
`;
