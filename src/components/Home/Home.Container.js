import {Suspense} from "react";
import {useQueryLoader, } from "react-relay";
import {loadQuery} from "react-relay/hooks";
import RelayEnvironment from "../../RelayEnvironment";
import {Home} from "./Home";
import {RepositoryIdQuery} from "./Home.graphql";
import {SearchContainer} from "../Search/Search.Container";

const preloadedQuery = loadQuery(RelayEnvironment,RepositoryIdQuery)

/** render as you fetch */
export const HomeContainer = (props) => {
    const [queryReference,loadQuery] = useQueryLoader(RepositoryIdQuery,props.preloadedQuery)

    if(queryReference===null){
        return (
            <>
                <div>
                    hi
                    <button
                        onClick={(e) => {
                            e.preventDefault();
                            loadQuery({})
                        }}
                    >
                        click
                    </button>
                </div>
            </>
        );
    }

    return (
        <>
            <Suspense fallback={<p>LOADING...</p>}>
                <Home
                    preloadedQuery={preloadedQuery}
                    queryReference={queryReference}
                />
                <SearchContainer />
            </Suspense>
        </>
    )
};


