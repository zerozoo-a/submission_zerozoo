import {
  useFragment,
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import graphql from "babel-plugin-relay/macro";
import { Search } from "./Search";

export default function HomeRoot(props) {
  const data = usePreloadedQuery(
    graphql`
      query HomeRootSearchQuery($query: String = "그린랩스") {
        search(query: $query, type: REPOSITORY, first: 10) {
          nodes {
            ...HomeRootSearchFragmentQuery
          }
          pageInfo {
            hasNextPage
            endCursor
          }
        }
      }
    `,
    props.prepare
  );

  const {
    search: { nodes, pageInfo },
  } = data;

  return (
    <div>
      <Search nodes={nodes} pageInfo={pageInfo} />
      {/*<div>*/}
      {/*  {nodes.map((node, index) => (*/}
      {/*    <div key={`${node.__id}`}>*/}
      {/*      <HomeSearchFragment node={node} index={index} />*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
}

export function HomeSearchFragment(props) {
  const data = useFragment(
    graphql`
      fragment HomeRootSearchFragmentQuery on Repository {
        name
        description
        stargazerCount
      }
    `,
    props.node
  );
  const { name, description, stargazerCount } = data;
  return (
    <>
      <div>{name}</div>
      <div>{description}</div>
      <div>{stargazerCount}</div>
    </>
  );
}
