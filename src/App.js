import "./App.css";
import { Suspense } from "react";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import { ErrorBoundary } from "react-error-boundary";

import { HomeContainer} from "./components/Home/Home.Container";


const App = () => {
  return (
    <div className="App">
      <HomeContainer />
    </div>
  );
}

const AppRoot = () => {
  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={"LOADING..."}>
        <ErrorBoundary
          fallbackRender={({ error }) => <div>{error.message}</div>}
        >
          <App />
        </ErrorBoundary>
      </Suspense>
    </RelayEnvironmentProvider>
  );
}
export default AppRoot;
