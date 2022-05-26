import {Staff} from "./Staff";

export class ManagementStaff<T> {
    head: Staff<T> | null;
    tail: Staff<T> | null;

    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    insertFirstNode(month: number, salary: number) {
        let staff = new Staff(month,salary);
        staff.next = this.head;
        this.head = staff;

        if (!this.tail) {
            this.tail = staff;
        }
        this.size++;
    }

    showList(): any {
        let listData = [];
        let currentStaff = this.head;

        while (currentStaff !== null) {
            listData.push(currentStaff.getStaff());
            currentStaff = currentStaff.next
        }
        return listData;
    }

    totalSumSalary(): void {
        let totalSumSalary: number = 0;
        let currentSalary = this.head;
        while (currentSalary !== null) {
            if (currentSalary) {
                totalSumSalary += currentSalary.salary;

            }

        }
    }
    findMaxSalary(): void{
        let currentList = this.head;
        let maxSalary = this.head.salary;
        while (currentList) {
            if (currentList.salary > maxSalary) {
                maxSalary = currentList.salary;
            }
            currentList = currentList.next;
        }
    }
    return

}