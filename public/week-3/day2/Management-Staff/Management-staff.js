import { Staff } from "./Staff";
var ManagementStaff = /** @class */ (function () {
    function ManagementStaff() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }
    ManagementStaff.prototype.insertFirstNode = function (month, salary) {
        var staff = new Staff(month, salary);
        staff.next = this.head;
        this.head = staff;
        if (!this.tail) {
            this.tail = staff;
        }
        this.size++;
    };
    ManagementStaff.prototype.showList = function () {
        var listData = [];
        var currentStaff = this.head;
        while (currentStaff !== null) {
            listData.push(currentStaff.getStaff());
            currentStaff = currentStaff.next;
        }
        return listData;
    };
    ManagementStaff.prototype.totalSumSalary = function () {
        var totalSumSalary = 0;
        var currentSalary = this.head;
        while (currentSalary !== null) {
            if (currentSalary) {
                totalSumSalary += currentSalary.salary;
            }
        }
    };
    ManagementStaff.prototype.findMaxSalary = function () {
        var currentList = this.head;
        var maxSalary = this.head.salary;
        while (currentList) {
            if (currentList.salary > maxSalary) {
                maxSalary = currentList.salary;
            }
            currentList = currentList.next;
        }
    };
    return ManagementStaff;
}());
export { ManagementStaff };
//# sourceMappingURL=Management-staff.js.map