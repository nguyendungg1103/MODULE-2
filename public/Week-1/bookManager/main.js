import { Book } from "./book";
import { BookManager } from "./BookManager";
var book1 = new Book("B002", "Lập trình java");
var book2 = new Book("B003", "Lập trình PHP");
var book3 = new Book("B004", "Lập trình Ruby");
var bookManager = new BookManager();
bookManager.addBook(book1);
bookManager.addBook(book2);
bookManager.addBook(book3);
bookManager.update("B002", "lập trình python");
console.log(bookManager.getList());
//# sourceMappingURL=main.js.map