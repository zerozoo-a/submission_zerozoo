import {
  useFragment,
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import {
  searchFragment,
  SearchQuery,
  searchResultItemConnectionFragment,
} from "./Search.graphql";
import { useState, Suspense } from "react";
import { ListContainer } from "./List/List.Container";
import { Input } from "./Input";

export const SearchContainer = () => {
  const [queryReference, loadQuery] = useQueryLoader(SearchQuery);
  const [query, setQuery] = useState("");

  const handleOnChange = ({ target: { value } }) => {
    setQuery(value);
  };
  const handleOnClick = (e) => {
    e.preventDefault();
    loadQuery({ query });
  };

  return (
    <>
      <HelloContainer />
      <Input handleOnClick={handleOnClick} handleOnChange={handleOnChange} />
      <Suspense fallback={"LOADING..."}>
        {queryReference !== null && (
          <ListContainer query={query} queryReference={queryReference} />
        )}
      </Suspense>
    </>
  );
};

const HelloFragment = (props) => {
  const data = useFragment(searchFragment);
  console.log("any props?", props);
  console.log("data", data);

  return (
    <>
      <h1>hello</h1>
    </>
  );
};
const HelloContainer = (props) => {
  // const data = usePreloadedQuery();

  return (
    <>
      <h1>hello</h1>
    </>
  );
};
