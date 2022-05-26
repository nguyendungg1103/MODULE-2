var EmailRegex = /** @class */ (function () {
    function EmailRegex() {
        this.EMAIL_REGEX = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\.[A-Za-z0-9]+)$/;
    }
    EmailRegex.prototype.validate = function (regex) {
        return this.EMAIL_REGEX.test(regex);
    };
    return EmailRegex;
}());
export { EmailRegex };
//# sourceMappingURL=EmailRegex.js.map