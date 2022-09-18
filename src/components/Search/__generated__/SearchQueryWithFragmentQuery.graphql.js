/**
 * @generated SignedSource<<73b92f754f39d638499283fa7d83b34b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": "react",
    "kind": "LocalArgument",
    "name": "query"
  }
],
v1 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 1
  },
  {
    "kind": "Variable",
    "name": "query",
    "variableName": "query"
  },
  {
    "kind": "Literal",
    "name": "type",
    "value": "REPOSITORY"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchQueryWithFragmentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SearchResultItemConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "SearchResultItemConnectionFragment"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchQueryWithFragmentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SearchResultItemConnection",
        "kind": "LinkedField",
        "name": "search",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "SearchResultItemEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "name",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "description",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "stargazerCount",
                        "storageKey": null
                      }
                    ],
                    "type": "Repository",
                    "abstractKey": null
                  },
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/)
                    ],
                    "type": "Node",
                    "abstractKey": "__isNode"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "bfe0c1c4123b64427ad5155503f42cba",
    "id": null,
    "metadata": {},
    "name": "SearchQueryWithFragmentQuery",
    "operationKind": "query",
    "text": "query SearchQueryWithFragmentQuery(\n  $query: String = \"react\"\n) {\n  search(type: REPOSITORY, query: $query, first: 1) {\n    ...SearchResultItemConnectionFragment\n  }\n}\n\nfragment SearchResultItemConnectionFragment on SearchResultItemConnection {\n  edges {\n    node {\n      __typename\n      ... on Repository {\n        id\n        name\n        description\n        stargazerCount\n      }\n      ... on Node {\n        __isNode: __typename\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

node.hash = "87442516811101e46ed1974dcb33ad17";

module.exports = node;
