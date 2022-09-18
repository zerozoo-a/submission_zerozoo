import graphql from "babel-plugin-relay/macro";

export const SearchMoreQuery = graphql`
  query SearchMoreQuery(
    $query: String = "그린랩스"
    $first: Int = 10
    $after: String
  ) {
    ...SearchLoadMore_repository
  }
`;
