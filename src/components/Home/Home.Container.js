import { SearchContainer } from "../Search/Search.Container";
import HomeRoot from "./HomeRoot";
import { loadQuery } from "react-relay/hooks";
import RelayEnvironment from "../../RelayEnvironment";
import HomeRootQuery from "./__generated__/HomeRootSearchQuery.graphql";
import { Search } from "./Search";

const HomeRootQueryRef = loadQuery(RelayEnvironment, HomeRootQuery, {
  query: "react",
});

export const HomeContainer = () => {
  return (
    <>
      <Search />
      {/*<HomeRoot prepare={HomeRootQueryRef} />*/}
    </>
  );
};
