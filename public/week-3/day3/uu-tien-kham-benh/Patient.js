var Patient = /** @class */ (function () {
    function Patient(name, ID) {
        this._name = name;
        this.ID = ID;
    }
    Object.defineProperty(Patient.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (value) {
            this._name = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Patient.prototype, "ID", {
        get: function () {
            return this._ID;
        },
        set: function (value) {
            this._ID = value;
        },
        enumerable: false,
        configurable: true
    });
    return Patient;
}());
export { Patient };
//# sourceMappingURL=Patient.js.map