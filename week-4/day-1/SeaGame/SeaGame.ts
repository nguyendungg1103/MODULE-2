import {Country} from "./Country";

export class SeaGame {
    arr: any;
    bl = false;

    constructor() {
        this.arr = [];
    }

    add(...country) {
        this.arr.push(...country);
    }

    bblSort() {
        for (let i = 0; i < this.arr.length; i++) {
            for (let j = 0; j < (this.arr.length - i - 1); j++) {
                if (this.sort(this.arr[j], this.arr[j + 1])) {
                    var temp = this.arr[j];
                    this.arr[j] = this.arr[j + 1];
                    this.arr[j + 1] = temp;
                    this.bl = false;
                }
            }
        }
        return this.arr;
    }

    sort(arr1, arr2): boolean {
        if (arr1.gold < arr2.gold) {
            this.bl = true;
        } else if (arr1.gold == arr2.gold) {
            if (arr1.silver < arr2.silver) {
                this.bl = true;
            } else if (arr1.silver == arr2.silver) {
                if (arr1.bronze < arr2.bronze) {
                    this.bl = true;
                } else if (arr1.bronze == arr2.bronze) {
                    if (arr1.name.localeCompare(arr2.name) == -1){
                        this.bl = true;
                    }
                }
            }
        }
        return this.bl;
    }

    showAll() {
        return this.arr;
    }
}