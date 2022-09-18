import HomeRootQuery from "./__generated__/HomeRootSearchQuery.graphql";
import {
  usePaginationFragment,
  usePreloadedQuery,
  useQueryLoader,
} from "react-relay";
import { Suspense, useState } from "react";
import { HomeSearchFragment } from "./HomeRoot";

export function Search() {
  const [queryRef, loadQuery] = useQueryLoader(HomeRootQuery);
  const [search, setSearch] = useState("");
  const handleOnClick = (e) => {
    e.preventDefault();
    loadQuery(search);
  };

  return (
    <div>
      <h2>Search!</h2>
      <form>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
        <input type="submit" onClick={handleOnClick} />
      </form>
      <Suspense fallback={"LOADING"}>
        {queryRef !== null && <DisplayFetchedData queryRef={queryRef} />}
      </Suspense>
    </div>
  );
}

function DisplayFetchedData({ queryRef }) {
  const data = usePreloadedQuery(HomeRootQuery, queryRef);
  const {
    search: { nodes },
  } = data;

  return nodes.map((node, index) => (
    <div key={node.__id}>
      <HomeSearchFragment node={node} index={index} />
    </div>
  ));
}

function LoadMore({ queryRef }) {
  const data = usePaginationFragment();
}
