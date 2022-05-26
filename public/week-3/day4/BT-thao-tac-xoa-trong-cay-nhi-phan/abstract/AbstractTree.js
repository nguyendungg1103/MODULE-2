var AbstractTree = /** @class */ (function () {
    function AbstractTree() {
    }
    AbstractTree.prototype.getSize = function () {
        return 0;
    };
    AbstractTree.prototype.inorder = function () {
    };
    AbstractTree.prototype.inSert = function (e) {
        return false;
    };
    AbstractTree.prototype.createNewNode = function (e) {
        return new TreeNode(e);
    };
    AbstractTree.prototype.insert = function (e) {
        if (this.root == null)
            this.root = this.createNewNode(e); /*create a new root*/
        else {
            /*locate the parent node*/
            var parent_1 = null;
            var current = this.root;
            while (current != null) {
                if (e.localeCompare(current.element) < 0) {
                    parent_1 = current;
                    current = current.left;
                }
                else if (e.localeCompare(current.element) > 0) {
                    parent_1 = current;
                    current = current.right;
                }
                else
                    return false; /*Duplicate node not inserted*/
            }
            if (e.localeCompare(parent_1.element) < 0)
                parent_1.left = this.createNewNode(e);
            else
                parent_1.right = this.createNewNode(e);
        }
        this.size++;
        return true; /*element inserted successfully*/
    };
    return AbstractTree;
}());
export { AbstractTree };
//# sourceMappingURL=AbstractTree.js.map