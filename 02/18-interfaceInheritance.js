var InterfaceNamespace;
(function (InterfaceNamespace) {
    var Motorcycle = /** @class */ (function () {
        function Motorcycle(name) {
            // No super for interfaces
            this.name = name;
        }
        Motorcycle.prototype.updateWheelCount = function (newWheelCount) {
            this.wheelCount = newWheelCount;
            console.log("Automobile has " + this.wheelCount);
        };
        Motorcycle.prototype.showNumberOfWheels = function () {
            console.log("Moved Automobile " + this.wheelCount + " miles");
        };
        Motorcycle.prototype.getFullName = function () {
            return "MC-" + this.name;
        };
        return Motorcycle;
    }());
    var moto = new Motorcycle("beginner-cycle");
    console.log(moto.getFullName());
})(InterfaceNamespace || (InterfaceNamespace = {}));
// Interfaces can also inherit from other interfaces
// Vehicle is an interface and therefore cannot have
// any implementation, hence no mention of `name` or
// `getFullName`
