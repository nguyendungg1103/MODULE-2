var BookManager = /** @class */ (function () {
    function BookManager() {
        this.books = [];
    }
    BookManager.prototype.addBook = function (book) {
        this.books.push(book);
    };
    BookManager.prototype.getList = function () {
        return this.books;
    };
    BookManager.prototype.findBook = function (Id) {
        var i = -1;
        this.books.forEach(function (book, index) {
            if (book.Id === Id) {
                i = index;
            }
        });
        return i;
    };
    BookManager.prototype.update = function (Id, name) {
        var indexBookUpdate = this.findBook(Id);
        if (indexBookUpdate != -1) {
            this.books[indexBookUpdate].setName(name);
        }
        else {
            ('update erro');
        }
    };
    BookManager.prototype.delete = function (Id) {
        var indexBookDelete = this.findBook(Id);
        if (indexBookDelete != -1) {
            this.books.splice(indexBookDelete, 1);
        }
    };
    return BookManager;
}());
export { BookManager };
//# sourceMappingURL=BookManager.js.map