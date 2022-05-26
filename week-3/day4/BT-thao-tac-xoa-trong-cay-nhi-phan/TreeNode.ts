export class TreeNode<E> {
    public element: E;
    public left: TreeNode <E>| null;
    public right: TreeNode <E>| null;

    constructor(e: E) {
        this.element = e;
    }
}