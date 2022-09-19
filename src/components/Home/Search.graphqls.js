import graphql from "babel-plugin-relay/macro";

/** queries */

export const SearchRepoQuery = graphql`
  query SearchRepoQuery {
    ...SearchRepoResults_repos
  }
`;

/**
 * @refetchable(Repo__search) = naming convention
 * */
export const SearchRepoResults_repos = graphql`
  fragment SearchRepoResults_repos on Query
  @argumentDefinitions(
    after: { type: "String" }
    first: { type: "Int", defaultValue: 5 }
    before: { type: "String" }
    last: { type: "Int" }
    query: { type: "String", defaultValue: "" }
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
            id
            name
            description
            stargazerCount
            viewerHasStarred
          }
        }
      }
      pageInfo {
        hasNextPage
      }
    }
  }
`;

/** mutations */

export const SearchAddStarMutation = graphql`
  mutation SearchAddStarMutation($starrableId: ID = "") {
    addStar(input: { starrableId: $starrableId }) {
      clientMutationId
      starrable {
        stargazerCount
        id
        viewerHasStarred
        __typename
      }
    }
  }
`;

export const SearchRemoveStarMutation = graphql`
  mutation SearchRemoveStarMutation($starrableId: ID = "") {
    removeStar(input: { starrableId: $starrableId }) {
      clientMutationId
      starrable {
        id
        stargazerCount
        viewerHasStarred
      }
    }
  }
`;
