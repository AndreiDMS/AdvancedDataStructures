# Advanced Data Structures

## Binary Search Trees (BST)
Sometimes called ordered or sorted binary trees, are a particular type of containers: data structures that store *items* (such as numbers, names etc.) in memory. 
They allow fast lookup, addition and removal of items.
Binary Search Trees can be used as dictionary or priorty queues.

### Methods
| Method | Example | 
| ------ | ------- | 
| insert | `bst.insert(new Bst.Node(1));` |
| delete | `bst.delete(bst.search(1));` |
| search | `bst.search(1);` |
| minimum | `bst.minimum();` |
| maximum | `bst.maximum();` |
| successor | `bst.successor(bst.search(1));` |
| predecessor | `bst.predecessor(bst.search(1))` |

## Red-Black Trees (RBT)
Red-Black trees are an improved version of the BST, with one extra bit of storage per node.
Red-Black trees are aproximately balanced as they ensure that no path is more than twice as long as any other.

### Methods
| Method | Example | 
| ------ | ------- | 
| insert | `rbt.insert(new Rbt.Node(1));` |
| search | `rbt.search(1);` |
| minimum | `rbt.minimum();` |
| maximum | `rbt.maximum();` |
| successor | `rbt.successor(rbt.search(1));` |
| predecessor | `rbt.predecessor(rbt.search(1))` |
| delete | `rbt.delete(rbt.search(1));` |