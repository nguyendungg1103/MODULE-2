var THApplication = /** @class */ (function () {
    function THApplication(name) {
        this.name = name;
        THApplication.count++;
    }
    THApplication.count = 0;
    return THApplication;
}());
console.log(THApplication.count);
var app1 = new THApplication("app 1");
var app2 = new THApplication("app 2");
console.log(THApplication.count);
//# sourceMappingURL=TH-Application.js.map