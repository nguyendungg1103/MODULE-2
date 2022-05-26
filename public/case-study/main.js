if (JSON.parse(localStorage.getItem("data")) === null) {
    localStorage.setItem("data", JSON.stringify([]));
}
var arrTong = JSON.parse(localStorage.getItem("data"));
export {};
//# sourceMappingURL=main.js.map