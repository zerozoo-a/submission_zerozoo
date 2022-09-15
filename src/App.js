import "./App.css";
import { Suspense } from "react";
import graphql from "babel-plugin-relay/macro";
import {
  RelayEnvironmentProvider,
} from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import { ErrorBoundary } from "react-error-boundary";

import { HomeContainer} from "./components/Home/HomeContainer";

const RepositoryNameQuery = graphql`
  query AppRepositoryNameQuery {
    repository(owner: "facebook", name: "relay") {
      name
    }
  }
`;


const App = (props) => {
  // const data = usePreloadedQuery(RepositoryNameQuery, props.preloadedQuery);

  return (
    <div className="App">
      {/*{data.repository.name}*/}
      <HomeContainer />
    </div>
  );
}

// const preloadedQuery = loadQuery(RelayEnvironment, RepositoryNameQuery, {});
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
