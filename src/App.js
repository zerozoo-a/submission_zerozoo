import { RelayEnvironmentProvider } from "react-relay/hooks";
import RelayEnvironment from "./RelayEnvironment";
import { ErrorBoundary } from "react-error-boundary";

import { Search } from "./components/Home/Search";

const App = () => {
  return (
    <div className="flex justify-center">
      <Search />
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
