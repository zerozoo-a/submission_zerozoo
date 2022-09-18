import { useFragment, usePreloadedQuery } from "react-relay";
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
        {nodes.map((node, index) => (
          <HomeRootFragment nodes={node} index={index} />
        ))}
      </div>
    </div>
  );
}

function HomeRootFragment(props) {
  const data = useFragment(
    graphql`
      fragment HomeRootSearchFragmentQuery on Repository {
        name
        description
      }
    `,
    props.nodes
  );

  const { name, description } = data;
  return (
    <div key={`node__${props.index}`}>
      <div>{name}</div>
      <div>{description}</div>
    </div>
  );
}
