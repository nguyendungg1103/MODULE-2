import {AbstractTree} from "./abstract/AbstractTree";
import {TreeNode} from "./TreeNode";

export class BST<E> extends AbstractTree <E>{
    protected root: TreeNode<E>;
    protected size: number = 0;

    public BST(objects: E[]) {
        for (let i = 0; i < objects.length; i++)
            this.insert(objects[i]);
    }
}