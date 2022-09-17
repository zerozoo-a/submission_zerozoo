import { useQueryLoader } from "react-relay";
import { SearchQuery } from "./Search.graphql";
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
      <Input handleOnClick={handleOnClick} handleOnChange={handleOnChange} />
      <Suspense fallback={"LOADING..."}>
        {queryReference !== null && (
          <ListContainer query={query} queryReference={queryReference} />
        )}
      </Suspense>
    </>
  );
};
