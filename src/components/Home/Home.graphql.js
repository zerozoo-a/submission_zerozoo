import graphql from "babel-plugin-relay/macro";

export const RepositoryIdQuery = graphql`
    query HomeContainerRepositoryIdQuery {
        repository(owner: "facebook", name: "relay") {
            id
        }
    }
`
