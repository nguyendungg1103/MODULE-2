import {Book} from "./book";

export class BookManager {
    books: Book[] = [];

    constructor() {
    }

    addBook(book: Book): void {
        this.books.push(book);
    }

    getList(): Book[] {
        return this.books;
    }

    findBook(Id: string) {
        let i = -1;
        this.books.forEach((book, index) => {
            if (book.Id === Id) {
                i = index;
            }
        })
        return i;
    }

    update(Id: string, name: string) {
        let indexBookUpdate = this.findBook(Id);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);

        } else {
            ('update erro');

        }
    }

    delete(Id: string): void {
        let indexBookDelete = this.findBook(Id);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);


        }
    }
}
