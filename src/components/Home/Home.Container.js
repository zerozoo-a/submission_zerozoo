import HomeRoot from "./HomeRoot";
import { loadQuery } from "react-relay/hooks";
import RelayEnvironment from "../../RelayEnvironment";
import HomeRootQuery from "./__generated__/HomeRootSearchQuery.graphql";

const HomeRootQueryRef = loadQuery(RelayEnvironment, HomeRootQuery, {
  query: "그린랩스",
});

export const HomeContainer = () => {
  return (
    <>
      <HomeRoot prepare={HomeRootQueryRef} />
    </>
  );
};
