"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Book = void 0;
var Book = /** @class */ (function () {
    function Book(Id, name) {
        this.Id = Id;
        this.name = name;
    }
    Book.prototype.getId = function () {
        return this.Id;
    };
    Book.prototype.setId = function (Id) {
        this.Id = Id;
    };
    Book.prototype.getName = function () {
        return this.name;
    };
    Book.prototype.setName = function (name) {
        this.name = name;
    };
    return Book;
}());
exports.Book = Book;
