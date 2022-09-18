/**
 * @generated SignedSource<<0e4e4c2ace4bdfa0c277a47c50d6f117>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchFragment",
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
              "kind": "InlineFragment",
              "selections": [
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
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "SearchResultItemConnection",
  "abstractKey": null
};

node.hash = "3df731fa2372f19f5862ed138faa07ab";

module.exports = node;
