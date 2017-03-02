/**
 *	Red-Black Trees
 */
'use strict';

var Rbt = Rbt || {};

Rbt.Color = {
  RED: 'R',
  BLACK: 'B'
}

Rbt.Node = function(k, data) {
  this.key = k; // integer
  this.parent = (k == 0) ? this : Rbt.NULL; // Node
  this.left = (k == 0) ? this : Rbt.NULL; // Node
  this.right = (k == 0) ? this : Rbt.NULL; // Node
  this.color = Rbt.Color.BLACK; // Rbt.Color.RED | Rbt.Color.BLACK
  this.data = data; // any
}

Rbt.NULL = new Rbt.Node(0);

Rbt.RBTree = function() {
  this.root = Rbt.NULL; // root node

  this.search = function(k) {
    return search(this.root, k);
  };

  this.minimum = function() {
    return minimum(this.root);
  };

  this.maximum = function() {
    return maximum(this.root);
  };

  this.successor = function(node) {
    if (node.right != Rbt.NULL) return minimum(node.right);

    if (node.parent == Rbt.NULL) return Rbt.NULL;

    var s = node.parent;
    while (s != Rbt.NULL && node == s.right) {
      node = s;
      s = s.parent;
    }
    return s;
  };

  this.predecessor = function(node) {
    if (node.left != Rbt.NULL) return maximum(node.left);

    if (node.parent == Rbt.NULL) return Rbt.NULL;

    var s = node.parent;
    while (s != Rbt.NULL && node == s.left) {
      node = s;
      s = s.parent;
    }
    return s;
  };

  this.insert = function(node) {
    var y = Rbt.NULL;
    var r = this.root;

    while (r != Rbt.NULL) {
      y = r;
      r = (node.key < r.key) ? r.left : r.right;
    }

    node.parent = y;

    if (y == Rbt.NULL)
      this.root = node;
    else if (node.key < y.key)
      y.left = node;
    else
      y.right = node;

    node.left = node.right = Rbt.NULL;
    node.color = Rbt.Color.RED;

    insertFixup.call(this, node);
  };

  this.delete = function(node) {
    if (node == Rbt.NULL) return Rbt.NULL;

    var ny = (node.left == Rbt.NULL || node.right == Rbt.NULL) ? node : this.successor(node);
    var nx = (ny.left != Rbt.NULL) ? ny.left : ny.right;

    nx.parent = ny.parent;

    if (ny.parent == Rbt.NULL) {
      this.root = nx;
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

    if (ny.color == Rbt.Color.BLACK)
      deleteFixup.call(this, nx);

    return ny;
  };

  this.inorder = function() {
    inorder(this.root);
  };

  this.display = function() {
    display(this.root, 0);
  };

  /** Private methods */
  function search(node, k) {
    if (node == Rbt.NULL || node.key == k)
      return node;

    return search((node.key > k) ? node.left : node.right, k);
  }

  function minimum(n) {
    var m = n;
    while (m.left != Rbt.NULL) m = m.left;
    return m;
  }

  function maximum(n) {
    var m = n;
    while (m.right != Rbt.NULL) m = m.right;
    return m;
  }

  function inorder(node, vars) {
    if (node != Rbt.NULL) {
      inorder(node.left);
      console.log(node.key);
      inorder(node.right);
    }
  }

  function display(node, indent) {
    if (node != Rbt.NULL) {
      display(node.right, indent + 2);
      console.info(" ".repeat(indent), node.key + ":" + node.color);
      display(node.left, indent + 2);
    }
  }

  function leftRotate(node) {
    var ny = node.right;

    node.right = ny.left;
    if (ny.left != Rbt.NULL)
      ny.left.parent = node;

    ny.parent = node.parent;
    if (node.parent == Rbt.NULL)
      this.root = ny;
    else if (node == node.parent.left)
      node.parent.left = ny;
    else
      node.parent.right = ny;

    ny.left = node;
    node.parent = ny;
  }

  function rightRotate(node) {
    var ny = node.left;

    node.left = ny.right;
    if (ny.right != Rbt.NULL)
      ny.right.parent = node;

    ny.parent = node.parent;
    if (node.parent == Rbt.NULL)
      this.root = ny;
    else if (node == node.parent.left)
      node.parent.left = ny;
    else
      node.parent.right = ny;

    ny.right = node;
    node.parent = ny;
  }

  function insertFixup(node) {
    var y;
    while (node.parent.color == Rbt.Color.RED) {
      if (node.parent == node.parent.parent.left) {
        y = node.parent.parent.right;
        if (y.color == Rbt.Color.RED) {
          node.parent.color = Rbt.Color.BLACK;
          y.color = Rbt.Color.BLACK;
          node.parent.parent.color = Rbt.Color.RED;
          node = node.parent.parent;
        } else {
          if (node == node.parent.right) {
            node = node.parent;
            leftRotate.call(this, node);
          }
          node.parent.color = Rbt.Color.BLACK;
          node.parent.parent.color = Rbt.Color.RED;
          rightRotate.call(this, node.parent.parent);
        }
      } else {
        y = node.parent.parent.left;
        if (y.color == Rbt.Color.RED) {
          node.parent.color = Rbt.Color.BLACK;
          y.color = Rbt.Color.BLACK;
          node.parent.parent.color = Rbt.Color.RED;
          node = node.parent.parent;
        } else {
          if (node == node.parent.left) {
            node = node.parent;
            rightRotate.call(this, node);
          }
          node.parent.color = Rbt.Color.BLACK;
          node.parent.parent.color = Rbt.Color.RED;
          leftRotate.call(this, node.parent.parent);
        }
      }
    }
    this.root.color = Rbt.Color.BLACK;
  }

  function deleteFixup(node) {
    var w;
    while ((node != this.root) && (node.color == Rbt.Color.BLACK)) {
      if (node == node.parent.left) {
        w = node.parent.right;
        if (w.color == Rbt.Color.RED) {
          w.color = Rbt.Color.BLACK;
          node.parent.color = Rbt.Color.RED;
          leftRotate.call(this, node.parent);
          w = node.parent.right;
        }
        if ((w.left.color == Rbt.Color.BLACK) && (w.right.color == Rbt.Color.BLACK)) {
          w.color = Rbt.Color.RED;
          node = node.parent;
        } else {
          if (w.right.color == Rbt.Color.BLACK) {
            w.left.color = Rbt.Color.BLACK;
            w.color = Rbt.Color.RED;
            rightRotate.call(this, w);
            w = node.parent.right;
          }
          w.color = node.parent.color;
          node.parent.color = Rbt.Color.BLACK;
          w.right.color = Rbt.Color.BLACK;
          leftRotate.call(this, node.parent);
          node = this.root;
        }
      } else {
        w = node.parent.left;
        if (w.color == Rbt.Color.RED) {
          w.color = Rbt.Color.BLACK;
          node.parent.color = Rbt.Color.RED;
          rightRotate.call(this, node.parent);
          w = node.parent.left;
        }
        if ((w.left.color == Rbt.Color.BLACK) && (w.right.color == Rbt.Color.BLACK)) {
          w.color = Rbt.Color.RED;
          node = node.parent;
        } else {
          if (w.left.color == Rbt.Color.BLACK) {
            w.right.color = Rbt.Color.BLACK;
            w.color = Rbt.Color.RED;
            LeftRotate(w);
            w = node.parent.left;
          }
          w.color = node.parent.color;
          node.parent.color = Rbt.Color.BLACK;
          w.left.color = Rbt.Color.BLACK;
          rightRotate.call(this, node.parent);
          node = this.root;
        }
      }
    }
    node.color = Rbt.Color.BLACK;
  }

}
