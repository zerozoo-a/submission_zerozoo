import { usePreloadedQuery} from "react-relay";
import {RepositoryIdQuery} from "./Home.graphql";

export const Home = ({queryReference}) => {
    const data = usePreloadedQuery(RepositoryIdQuery,queryReference)

    return <>{data.repository?.id}</>
}
