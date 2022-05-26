import {Book} from "./book";
import {BookManager} from "./BookManager";
let book1 = new Book("B002","Lập trình java");
let book2 = new Book("B003","Lập trình PHP");
let book3 = new Book("B004","Lập trình Ruby");
let bookManager = new BookManager();
bookManager.addBook(book1);
bookManager.addBook(book2);
bookManager.addBook(book3);
bookManager.update("B002","lập trình python");

console.log(bookManager.getList());