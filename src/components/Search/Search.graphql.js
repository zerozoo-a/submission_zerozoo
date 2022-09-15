import graphql from "babel-plugin-relay/macro";

export const SearchQuery = graphql`
    query SearchContainerQuery ($query: String = ""){
        search(type: REPOSITORY,first:10,query:$query){
            edges {
                node {
                    ... on Repository {
                        id
                        name
                        description
                    }
                }
            }
        }
    }
`
