import { useQueryLoader } from "react-relay";
import { SearchQuery } from "./Search.graphql";
import { useState, Suspense } from "react";
import { List } from "./List";
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
      <Input handleOnClick={handleOnClick} handleOnChange={handleOnChange} />
      <Suspense fallback={"LOADING..."}>
        {queryReference !== null && <List queryReference={queryReference} />}
      </Suspense>
    </>
  );
};
