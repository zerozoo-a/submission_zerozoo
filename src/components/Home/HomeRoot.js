import {
  useFragment,
  usePaginationFragment,
  usePreloadedQuery,
} from "react-relay";
import graphql from "babel-plugin-relay/macro";

export default function HomeRoot(props) {
  const data = usePreloadedQuery(
    graphql`
      query HomeRootSearchQuery($query: String = "react") {
        search(query: $query, type: REPOSITORY, first: 10) {
          nodes {
            ...HomeRootSearchFragmentQuery
          }
        }
      }
    `,
    props.prepare
  );
  const {
    search: { nodes },
  } = data;

  return (
    <div>
      <h2>hello home root</h2>
      <div>
        {/*{nodes.map((node, index) => (*/}
        {/*  <div key={`${props.node.__id}`}>*/}
        {/*    <HomeRootFragment node={node} index={index} />*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    </div>
  );
}

export function HomeSearchFragment(props) {
  const data = useFragment(
    graphql`
      fragment HomeRootSearchFragmentQuery on Repository {
        name
        description
      }
    `,
    props.node
  );
  const { name, description } = data;
  return (
    <>
      <div>{name}</div>
      <div>{description}</div>
    </>
  );
}
