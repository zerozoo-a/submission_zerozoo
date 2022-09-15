/**
 * @generated SignedSource<<365b7351493385206a495ff70669b34c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = (function(){
var v0 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Literal",
        "name": "name",
        "value": "relay"
      },
      {
        "kind": "Literal",
        "name": "owner",
        "value": "facebook"
      }
    ],
    "concreteType": "Repository",
    "kind": "LinkedField",
    "name": "repository",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "id",
        "storageKey": null
      }
    ],
    "storageKey": "repository(name:\"relay\",owner:\"facebook\")"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "HomeRepositoryIdQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeRepositoryIdQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "a6396a52c6030f4d02c0024dee32cc52",
    "id": null,
    "metadata": {},
    "name": "HomeRepositoryIdQuery",
    "operationKind": "query",
    "text": "query HomeRepositoryIdQuery {\n  repository(owner: \"facebook\", name: \"relay\") {\n    id\n  }\n}\n"
  }
};
})();

node.hash = "ebd3740f9f8b1d99132a3875ef80cbea";

module.exports = node;
