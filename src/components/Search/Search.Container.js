import {Search} from './Search'
import {useRelayEnvironment, useLazyLoadQuery, loadQuery, useQueryLoader,usePreloadedQuery} from "react-relay";
import {SearchQuery} from "./Search.graphql";
import {Suspense} from "react";


export const SearchContainer = (props) => {
    const data = useLazyLoadQuery(SearchQuery,{query:"그린랩스"},{})
    const environment = useRelayEnvironment();
    // const queryReference = loadQuery(
    //     environment,
    //     SearchQuery,
    //     {query:"그린랩스"},
    //     {}
    // )
    const [queryReference, loadQuery] = useQueryLoader(SearchQuery,props.searchRef)


    return (<>
        <button
            onClick={()=>loadQuery({query:"그린랩스"})}
            disabled={queryReference !== null}
        >btn</button>

        <Suspense fallback={"LOADING..."}>
            {queryReference != null ? <div>success! <Hello queryReference={queryReference}/></div> : <div>something wrong</div>}
        </Suspense>
    </>)
}

const Hello = ({queryReference}) => {
    const data = usePreloadedQuery(SearchQuery, queryReference)
    console.log('data >>>', data)

    return <h1>Hello</h1>
}