export class Student<T> {
    name: string;
    score: number;
    next: Student<T> | null = null;

    constructor(name: string, score: number) {
        this.name = name;
        this.score = score;
    }

    getName(): string {
        return this.name;
    }

    getScore(): number {
        return this.score;
    }

    getStudent(): any {
        return {
            name: this.name, score: this.score
        }
    }
}