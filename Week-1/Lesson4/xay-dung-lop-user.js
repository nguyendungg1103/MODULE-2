"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
var User = /** @class */ (function () {
    function User(name, Email, role) {
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "Email", {
        get: function () {
            return this._Email;
        },
        set: function (value) {
            this._Email = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(User.prototype, "role", {
        get: function () {
            return this._role;
        },
        set: function (value) {
            this._role = value;
        },
        enumerable: false,
        configurable: true
    });
    User.prototype.getInfo = function () {
        return "Name: ".concat(this._name, " \nEmail: ").concat(this._Email, " \nRole: ").concat(this._role);
    };
    User.prototype.isAdmin = function () {
        if (this._role === 1) {
            console.log("Admin");
            return true;
        }
        console.log("User");
        return false;
    };
    return User;
}());
exports.User = User;
