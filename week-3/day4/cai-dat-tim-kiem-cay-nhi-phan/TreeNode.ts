export class TreeNode<E> {
    public element :E;
    public right : TreeNode<E>;
    public Left :TreeNode<E>;
    constructor(e:E) {
        this.element =e;
    }
}