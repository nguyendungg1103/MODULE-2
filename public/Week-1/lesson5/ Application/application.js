var Application = /** @class */ (function () {
    function Application(name) {
        this.name = name;
        Application.count++;
    }
    Application.count = 0;
    return Application;
}());
console.log(Application.count);
var app1 = new Application("app one");
var app2 = new Application("app one");
console.log(Application.count);
//# sourceMappingURL=application.js.map