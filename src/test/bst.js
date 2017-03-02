var bst = new Bst.BSTree();

bst.insert(new Bst.Node(5));
bst.insert(new Bst.Node(2));
bst.insert(new Bst.Node(20));
bst.insert(new Bst.Node(1));
bst.insert(new Bst.Node(4));
bst.insert(new Bst.Node(3));
bst.insert(new Bst.Node(15));
bst.insert(new Bst.Node(30));
bst.insert(new Bst.Node(10));
bst.insert(new Bst.Node(18));

bst.inorder();

bst.display();

console.info("Search", bst.search(1));
console.info("Min",bst.minimum());
console.info("Max",bst.maximum());
console.info("Successor", bst.successor(bst.search(3)));
console.info("Predecessor", bst.predecessor(bst.search(5)));
console.info("Delete", bst.delete(bst.search(5)));

bst.display();

console.info("Done!");
