var bst = new Rbt.RBTree();

bst.insert(new Rbt.Node(1));
bst.insert(new Rbt.Node(2));
bst.insert(new Rbt.Node(3));
bst.insert(new Rbt.Node(5));
bst.insert(new Rbt.Node(10));
bst.insert(new Rbt.Node(18));
bst.insert(new Rbt.Node(20));
bst.insert(new Rbt.Node(15));
bst.insert(new Rbt.Node(30));
bst.insert(new Rbt.Node(4));

bst.inorder();

bst.display();

console.info("Search", bst.search(1));
console.info("Min",bst.minimum());
console.info("Max",bst.maximum());
console.info("Successor", bst.successor(bst.search(15)));
console.info("Predecessor", bst.predecessor(bst.search(15)));
console.info("Delete", bst.delete(bst.search(10)));

bst.display();

console.info("Done!");
