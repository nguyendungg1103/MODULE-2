var NextDayCalculator = /** @class */ (function () {
    function NextDayCalculator() {
    }
    NextDayCalculator.nextDay = function (day, month, year) {
        if (day > 31 && day < 0) {
            return "Ngay khong co trong thang";
        }
        if (month > 12 && month < 0) {
            return "Thang khong co trong nam";
        }
        if (month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10) {
            if (day == 31) {
                return "Day: 1 , Month: ".concat(++month, " , Year: ").concat(year);
            }
            return "Day: ".concat(++day, " , Month: ").concat(month, " , Year: ").concat(year);
        }
        else if (month == 4 || month == 6 || month == 9 || month == 11) {
            if (day == 30) {
                return "Day: 1 , Month: ".concat(++month, " , Year: ").concat(year);
            }
            return "Day: ".concat(++day, " , Month: ").concat(month, " , Year: ").concat(year);
        }
        else if (month == 12) {
            if (day == 31) {
                return "Day: 1 , Month: 1 , Year: ".concat(++year);
            }
            return "Day: ".concat(++day, " , Month: ").concat(month, " , Year: ").concat(year);
        }
        else {
            if (day > 29) {
                return "Ngay khong co trong thang";
            }
            if (year % 4 == 0 || year % 100 == 0 || year % 400 == 0) {
                if (day == 29) {
                    return "Day: 1 , Month: 3 , Year: ".concat(year);
                }
            }
            else {
                if (day == 28) {
                    return "Day: 1 , Month: 3 , Year: ".concat(year);
                }
            }
            return "Day: ".concat(++day, " , Month: ").concat(month, " , Year: ").concat(year);
        }
    };
    return NextDayCalculator;
}());
export { NextDayCalculator };
//# sourceMappingURL=NextDayCalculator.js.map