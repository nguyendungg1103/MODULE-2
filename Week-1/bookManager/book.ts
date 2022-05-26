export class Book {
    Id: string;
    name: string;
    constructor(Id: string, name: string) {
        this.Id = Id;
        this.name = name;
    }

    getId() {
        return this.Id;

    }

    setId(Id: string) {
        this.Id = Id;
    }

    getName() {
        return this.name;
    }

    setName(name: string) {
        this.name = name
    }

}