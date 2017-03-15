# Advanced Data Structures

## Binary Search Trees (BST)

Sometimes called ordered or sorted binary trees, are a particular type of containers: data structures that store *items* (such as numbers, names etc.) in memory. 
A binary search tree is organized as a binary tree. We can represent such tree by a linked data structure in which each node is an object with the following attributes: in addition to a *key* and satelite *data*, each node contains *parent*, *left* and *right* attributes that point to nodes coresponding to its parent, its left child and its right child, respectively.
If one of these links are missing the attribute is set to NULL. The root is the only noed in the tree with a NULL parent.
They allow fast lookup, addition and removal of items.
Binary Search Trees can be used as dictionary or priorty queues.

Source: [src/ads/binary-search-tree.js] [BSTsrc]

#### Usage
```javascript
// create a bst tree
var bst = new Bst.tree();

// create a new node. key is a number representing the node key, data is the satelite data
var node = new Bst.Node(key, data);

// insert the node
bst.insert(new Bst.Node(1));

// retrieve the node with minimum key
var minNode = bst.minimum();

// retrieve the node with maximum key
var maxKey = bst.maximum();

// retrieve the predecessor of a given node
var pred = bst.predecessor(node);

// retrieve the successor of a given node
var succ = bst.successor(node);

// search a node by key
var node = bst.search(1);

// remove a node
bst.remove(node);

```

## Red-Black Trees (RBT)
Red-Black trees are an improved version of the BST, with one extra bit of storage per node.
Red-Black trees are aproximately balanced as they ensure that no path is more than twice as long as any other.

Source: [src/ads/red-black-tree.js] [RBTsrc]

### Methods
| Method | Example | 
| ------ | ------- | 
| insert | `rbt.insert(new Rbt.Node(1));` |
| search | `rbt.search(1);` |
| minimum | `rbt.minimum();` |
| maximum | `rbt.maximum();` |
| successor | `rbt.successor(rbt.search(1));` |
| predecessor | `rbt.predecessor(rbt.search(1))` |
| remove | `rbt.remove(rbt.search(1));` |

## B-Trees
It's a self balancing tree data structure. It is a generalization of a BST in that a node can have more than 2 children.
B-Trees are a good example of a data structure for external memory. It is commonly used for in databases and filesystems.

## Binomial Heaps

## Disjoint-set Structures

## Amortised Analysis

## Computational Geometry

## String Matching

[]: #

[BSTsrc]: <https://github.com/AndreiDMS/AdvancedDataStructures/blob/master/src/ads/binary-search-tree.js>
[RBTsrc]: <https://github.com/AndreiDMS/AdvancedDataStructures/blob/master/src/ads/red-black-tree.js>