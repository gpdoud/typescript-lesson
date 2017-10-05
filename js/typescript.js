console.log("Ok");
var x = 0;
var y = 0;
var z = true;
function sayHello() {
    return "Hello";
}
;
var Customer = /** @class */ (function () {
    function Customer(id, name) {
        this.Id = id;
        this.Name = name;
    }
    Customer.prototype.Log = function () {
        console.log(this.Id, this.Name);
    };
    return Customer;
}());
var cust = new Customer(1, "Max Tech Train");
cust.Log();
var custList = [
    new Customer(2, "P&G"),
    new Customer(3, "GE"),
    new Customer(4, "Great American"),
    new Customer(5, "TQL")
];
for (var _i = 0, custList_1 = custList; _i < custList_1.length; _i++) {
    var cust_1 = custList_1[_i];
    cust_1.Log();
}
var Student = /** @class */ (function () {
    function Student(name, color, number) {
        this.Name = name;
        this.Color = color;
        this.Number = number;
    }
    Student.prototype.debug = function () {
        console.log(this.Number, this.Name, this.Color);
    };
    return Student;
}());
var students = [
    new Student("Sue Ann", "Green", 7),
    new Student("Greg", "Black", 4),
    new Student("Eric B", "Blue", 11),
    new Student("Bob", "Black", 13),
    new Student("Eric S", "Green", 13)
];
for (var _a = 0, students_1 = students; _a < students_1.length; _a++) {
    var student = students_1[_a];
    student.debug();
}
