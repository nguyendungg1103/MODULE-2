import {Tree} from "../interface/Tree";

export abstract  class AbstractTree <E> implements Tree <E> {
    getSize(): number {
        return 0;
    }

    inorder(): void {
    }

    inSert(e: E): boolean {
        return false;
    }
    protected createNewNode(e: E): TreeNode {
        return new TreeNode(e);
    }

    public insert(e): boolean {
        if (this.root == null)
            this.root = this.createNewNode(e); /*create a new root*/
        else {
            /*locate the parent node*/
            let parent: TreeNode = null;
            let current: TreeNode = this.root;
            while (current != null) {
                if (e.localeCompare(current.element) < 0) {
                    parent = current;
                    current = current.left;
                } else if (e.localeCompare(current.element) > 0) {
                    parent = current;
                    current = current.right;
                } else
                    return false; /*Duplicate node not inserted*/
            }
            if (e.localeCompare(parent.element) < 0)
                parent.left = this.createNewNode(e);
            else
                parent.right = this.createNewNode(e);
        }
        this.size++;
        return true; /*element inserted successfully*/
    }
}