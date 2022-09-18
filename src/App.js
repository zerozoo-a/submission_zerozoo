import "./App.css";
import graphql from "babel-plugin-relay/macro";
import {
  loadQuery,
  RelayEnvironmentProvider,
  useRelayEnvironment,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import { ErrorBoundary } from "react-error-boundary";

import { Suspense } from "react";
import { HomeContainer } from "./components/Home/Home.Container";
import { useFragment, usePreloadedQuery, useQueryLoader } from "react-relay";
import {
  FragmentForSearch,
  SearchQueryWithFragment,
  searchRelayFragment,
  searchRelayQuery,
} from "./components/Search/Search.graphql";
// 1. props=loadQuery(query)
// 2. usePreloadedQuery(
//
const appPreRelayQuery = require("./__generated__/AppRelayQuery.graphql");
const preloadedQuery = loadQuery(RelayEnvironment, appPreRelayQuery, {});

const App = () => {
  return (
    <div className="App">
      <HomeContainer />
    </div>
  );
};

const AppRoot = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <ErrorBoundary fallbackRender={({ error }) => <div>{error.message}</div>}>
        <App />
      </ErrorBoundary>
    </RelayEnvironmentProvider>
  );
};
export default AppRoot;
