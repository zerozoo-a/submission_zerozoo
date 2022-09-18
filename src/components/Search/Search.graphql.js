import graphql from "babel-plugin-relay/macro";

export const searchFragment = graphql`
  fragment SearchContainer_repository on Repository {
    id
    name
    description
    stargazerCount
  }
`;

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
    search(type: REPOSITORY, first: 1, query: $query, after: $after) {
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

export const SearchQueryWithFragment = graphql`
  query SearchQueryWithFragmentQuery($query: String = "react") {
    search(type: REPOSITORY, query: $query, first: 1) {
      ...SearchResultItemConnectionFragment
    }
  }
`;
export const FragmentForSearch = graphql`
  fragment SearchResultItemConnectionFragment on SearchResultItemConnection {
    edges {
      node {
        ... on Repository {
          id
          name
          description
          stargazerCount
        }
      }
    }
  }
`;

// export const searchRelayQuery = graphql`
//   query SearchRelayQuery {
//     relay {
//       ...SearchQueryFragment
//     }
//   }
// `;

export const searchRelayFragment = graphql`
  fragment SearchQueryFragment on Query {
    search(query: "react", type: REPOSITORY, first: 1) {
      edges {
        node {
          ... on Repository {
            id
            name
            description
            stargazerCount
          }
        }
      }
    }
  }
`;