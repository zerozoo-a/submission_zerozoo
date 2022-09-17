import { Suspense } from "react";
import { useQueryLoader } from "react-relay";
import { loadQuery } from "react-relay/hooks";
import RelayEnvironment from "../../RelayEnvironment";
import { RepositoryIdQuery } from "./Home.graphql";
import { SearchContainer } from "../Search/Search.Container";

export const HomeContainer = () => {
  return (
    <>
      <SearchContainer />
    </>
  );
};
