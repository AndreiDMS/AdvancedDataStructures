/*jslint devel: true */
/*jslint node: true */
'use strict';

/**
 * Binary Search Tree Data structure
 */
var Bst = Bst || {};

Bst.Node = function(k, data) {
	this.data = data; // any

	this.key = k; // integer
	this.parent = null; // Node
	this.left = null; // Node
	this.right = null; // Node
};

Bst.Tree = function() {

	var self = this;

	/* public methods */
	self.search = searchNode;
	self.minimum = minimumNode;
	self.maximum = maximumNode;
	self.successor = successor;
	self.predecessor = predecessor;
	self.insert = insert;
	self.remove = remove;
	self.inorder = inorder;
	self.displayInorder = displayInorder;
	self.displayTree = displayTree;

	/* private vars */
	var root = null; // root node

	/**
	 * Search a node by key
	 */
	function searchNode(key) {
		return search(root, key);
	}

	/**
	 * Recursive search a node by key
	 */
	function search(node, key) {
		if (node === null || node.key == key)
			return node;

		return search((node.key > key) ? node.left : node.right, key);
	}

	/**
	 * Retrieve the tree node with the minimum key
	 */
	function minimumNode() {
		return minimum(root);
	}

	/**
	 * Return the leftmost child of a node
	 */
	function minimum(node) {
		var n = node;
		while (n.left !== null)
			n = n.left;
		return n;
	}

	/**
	 * Retrieve the tree node with the maximum key
	 */
	function maximumNode() {
		return maximum(root);
	}

	/**
	 * Return the rightmost child of a node
	 */
	function maximum(node) {
		var n = node;
		while (n.right !== null)
			n = n.right;
		return n;
	}

	/**
	 * Retrieve the successor of a given node by its key
	 */
	function successor(node) {
		if (node.right !== null)
			return minimum(node.right);

		if (node.parent === null)
			return null;

		var s = node.parent;
		while (s !== null && node == s.right) {
			node = s;
			s = s.parent;
		}
		return s;
	}

	/**
	 * Retrieve the predecessor of a given node by its key
	 */
	function predecessor(node) {
		if (node.left !== null)
			return maximum(node.left);

		if (node.parent === null)
			return null;

		var p = node.parent;
		while (p !== null && node == p.left) {
			node = p;
			p = p.parent;
		}
		return p;
	}

	/**
	 * Insert a new node
	 */
	function insert(node) {
		var y = null;
		var r = root;
		while (r !== null) {
			y = r;
			r = (node.key < r.key) ? r.left : r.right;
		}
		node.parent = y;
		if (y === null)
			root = node;
		else if (node.key < y.key)
			y.left = node;
		else
			y.right = node;
	}

	/**
	 * Remove a node
	 */
	function remove(node) {
		if (node === null)
			return null;

		var ny = (node.left === null || node.right === null) ? node
				: successor(node);
		var nx = (ny.left !== null) ? ny.left : ny.right;

		if (nx !== null) {
			nx.parent = ny.parent;
		}

		if (ny.parent === null) {
			root = nx;
		} else {
			if (ny == ny.parent.left) {
				ny.parent.left = nx;
			} else {
				ny.parent.right = nx;
			}
		}

		if (ny != node) {
			node.key = ny.key;
			node.data = ny.data;
		}

		return ny;
	}

	/**
	 * Executes a provided function for each tree element, sorted by key
	 */
	function inorder(node, callback) {
		if (node !== null) {
			inorder(node.left, callback);
			if (typeof callback === 'function')
				callback(node);
			inorder(node.right, callback);
		}
	}

	/**
	 * Display the sorted keys of the tree
	 */
	function displayInorder() {
		var s = [];
		inorder(root, function(node) {
			s.push(node.key);
		});
		console.info(s.join(', '));
	}

	/**
	 * Display the tree structure with indentation
	 */
	function displayTree() {
		display(root, 0);
	}

	/**
	 * Recursive display
	 */
	function display(node, indent) {
		if (node !== null) {
			display(node.right, indent + 2);
			console.info(" ".repeat(indent), node.key);
			display(node.left, indent + 2);
		}
	}

};
