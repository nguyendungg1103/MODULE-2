import {AbstractTree} from "./abstract/AbstractTree";
import {TreeNode} from "./TreeNode";

export class BST<E> extends AbstractTree<E> {
    protected root: TreeNode<E>;
    protected size: number = 0;
    public BST <E>(objects: E[]) {
        for (let i = 0; i < objects.length; i++)
            this.insert(objects[i]);
    }
    protected createNewNode(e: E): TreeNode<E> {
        return new TreeNode(e);
    }

    public insert(e): boolean {
        if (this.root == null)
            this.root = this.createNewNode(e);
        else {
            let parent: TreeNode<E>= null;
            let current: TreeNode<E>= this.root;
            while (current != null) {
                if (e.localeCompare(current.element) < 0) {
                    parent = current;
                    current = current.Left;
                } else if (e.localeCompare(current.element) > 0) {
                    parent = current;
                    current = current.right;
                } else
                    return false;
            }
            if (e.localeCompare(parent.element) < 0)
                parent.Left = this.createNewNode(e);
            else
                parent.right = this.createNewNode(e);
        }
        this.size++;

    }
    public getSize(): number {
        return super.getSize();
    }
    protected _inorder(root: TreeNode<E>): void {
        if (root == null) return;

        this._inorder(root.Left);

        console.log(root.element + " ");

        this._inorder(root.right);

    }

    public inorder(): void {
        this._inorder(this.root);
    }

}