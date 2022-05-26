export class Shape {
    private _color: string
    private _filled: boolean;

    constructor(color: string, filled: boolean) {
        this._color = color;
        this._filled = filled;
    }

    public getColor(): string {
        return this._color;
    }

    public setColor(value: string) {
        this._color = value;
    }

    public isFilled(): boolean {
        return this._filled;
    }

    public setFilled(value: boolean) {
        this._filled = value;
    }

    public toString(): string {
        return "A Shape with color of "
            + this.getColor()
            + " and "
            + (this.isFilled() ? "filled" : "not filled");
    }
}