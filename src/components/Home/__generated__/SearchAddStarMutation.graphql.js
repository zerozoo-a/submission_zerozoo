/**
 * @generated SignedSource<<275d84cc0d42ea84b53fbb07ee593d48>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "defaultValue": "",
    "kind": "LocalArgument",
    "name": "starrableId"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "starrableId",
            "variableName": "starrableId"
          }
        ],
        "kind": "ObjectValue",
        "name": "input"
      }
    ],
    "concreteType": "AddStarPayload",
    "kind": "LinkedField",
    "name": "addStar",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "clientMutationId",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": null,
        "kind": "LinkedField",
        "name": "starrable",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "stargazerCount",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "viewerHasStarred",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "SearchAddStarMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SearchAddStarMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "251c8b30305d4fd4bb6938f5d2bd97a5",
    "id": null,
    "metadata": {},
    "name": "SearchAddStarMutation",
    "operationKind": "mutation",
    "text": "mutation SearchAddStarMutation(\n  $starrableId: ID = \"\"\n) {\n  addStar(input: {starrableId: $starrableId}) {\n    clientMutationId\n    starrable {\n      stargazerCount\n      id\n      viewerHasStarred\n      __typename\n    }\n  }\n}\n"
  }
};
})();

node.hash = "2c1d36851b6a1cc6d231f540100e9854";

module.exports = node;
