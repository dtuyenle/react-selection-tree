'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.flattenChildren = flattenChildren;
exports.flattenParent = flattenParent;
exports.flattenNode = flattenNode;
exports.copyTreeState = copyTreeState;
exports.getNodeById = getNodeById;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable */
// flatten children nodes
function flattenChildren(node, checked) {
  var data = _defineProperty({}, node.id, node);
  var arr = [node];

  var _loop = function _loop() {
    var current = arr[0];
    arr.shift();
    if (typeof current.children !== 'undefined' && current.children !== null) {
      Object.keys(current.children).forEach(function (key) {
        data[key] = current.children[key];
        data[key].checked = typeof checked !== 'undefined' ? checked : data[key].checked;
        data[key].parent = current;
        arr.push(current.children[key]);
      });
    }
  };

  while (arr.length > 0) {
    _loop();
  }
  return data;
}

/* eslint-enable */

// flatten parent nodes
function flattenParent(node, checked) {
  var results = {};
  var currNode = node;
  while (currNode.parent && currNode.parent !== null) {
    currNode.checked = typeof checked !== 'undefined' ? checked : currNode.checked;
    results = Object.assign(results, currNode);
    currNode = currNode.parent;
  }
  return results;
}

// flatten a tree
function flattenNode(node, checked) {
  return Object.assign(flattenParent(node, checked), flattenChildren(node, checked));
}

// copy state from one tree to another
function copyTreeState(originalNode, copyNode) {
  var flatOriginalNode = flattenNode(originalNode);
  var flatCopyNode = flattenNode(copyNode);

  Object.keys(flatCopyNode).forEach(function (key) {
    if (flatOriginalNode[key] && flatCopyNode[key]) {
      flatOriginalNode[key].checked = flatCopyNode[key].checked;
    }
  });
}

// get a node by id
function getNodeById(node, ids) {
  var nodes = flattenNode(node);
  return ids.map(function (id) {
    return nodes[id] ? nodes[id] : null;
  });
}