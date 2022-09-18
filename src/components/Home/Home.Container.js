import { SearchContainer } from "../Search/Search.Container";
import HomeRoot from "./HomeRoot";
import { loadQuery } from "react-relay/hooks";
import RelayEnvironment from "../../RelayEnvironment";
import HomeRootQuery from "./__generated__/HomeRootSearchQuery.graphql";

const HomeRootQueryRef = loadQuery(RelayEnvironment, HomeRootQuery, {
  query: "react",
});

export const HomeContainer = () => {
  return (
    <>
      <HomeRoot prepare={HomeRootQueryRef} />
      {/*<SearchContainer />*/}
    </>
  );
};
