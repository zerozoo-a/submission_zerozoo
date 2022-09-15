/**
 * @generated SignedSource<<6baeccc1fdc09852b5a7fb2248bbcc21>>
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
    "name": "HomeContainerRepositoryIdQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "HomeContainerRepositoryIdQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "6efdeac18f4cc079e8f473536a783f6e",
    "id": null,
    "metadata": {},
    "name": "HomeContainerRepositoryIdQuery",
    "operationKind": "query",
    "text": "query HomeContainerRepositoryIdQuery {\n  repository(owner: \"facebook\", name: \"relay\") {\n    id\n  }\n}\n"
  }
};
})();

node.hash = "c248745c94a832cb00fd91b73d7f95e6";

module.exports = node;
