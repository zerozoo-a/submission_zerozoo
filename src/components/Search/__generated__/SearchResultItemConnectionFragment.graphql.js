/**
 * @generated SignedSource<<a231f3ac7a96b5ca108cb21116aa1b21>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

var node = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "SearchResultItemConnectionFragment",
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

node.hash = "c6ab59f8a65d92019ff74b9373170732";

module.exports = node;
