//giải phương trình bậc 2
var QuadraticEquation = /** @class */ (function () {
    function QuadraticEquation(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
    }
    QuadraticEquation.prototype.getA = function () {
        return this.a;
    };
    QuadraticEquation.prototype.setA = function (a) {
        this.a = a;
    };
    QuadraticEquation.prototype.getB = function () {
        return this.b;
    };
    QuadraticEquation.prototype.setB = function (b) {
        this.b = b;
    };
    QuadraticEquation.prototype.getC = function () {
        return this.c;
    };
    QuadraticEquation.prototype.setC = function (c) {
        this.c = c;
    };
    QuadraticEquation.prototype.getResult = function () {
        return "".concat(this.a, "x^2 +").concat(this.b, "x +").concat(this.c, "=0");
    };
    QuadraticEquation.prototype.Equation = function () {
        var delta = this.b * this.b - 4 * this.a * this.c;
        console.log(delta);
        console.log((-this.b + Math.sqrt(delta)) / (2 * this.a));
        if (this.a == 0 && this.b == 0 && this.c == 0) {
            console.log(" ".concat(this.getResult(), "phuong trinh vo so nghiem "));
        }
        else if (this.a == 0 && this.b == 0) {
            console.log("".concat(this.getResult(), " phuong trinh vo nghiem"));
        }
        else if (this.a == 0) {
            console.log("".concat(this.getResult(), " Phuong trinh co nghiem ").concat((-this.c / this.a)));
        }
        else {
            if (delta == 0) {
                console.log("".concat(this.getResult(), " Nghiem kep").concat((-this.b / 2 * this.a)));
            }
            else if (delta > 0) {
                console.log("".concat(this.getResult(), " Hai nghiem phan biet x1 = ").concat((-this.b + Math.sqrt(delta) / 2 * this.a), "\n                x2= ").concat((-this.b + Math.sqrt(delta) / 2 * this.a), "\n                "));
            }
            else {
                console.log('phuong trinh vo nghiem');
            }
        }
    };
    return QuadraticEquation;
}());
var pt1 = new QuadraticEquation(2, 5, 7);
pt1.getResult();
pt1.Equation();
