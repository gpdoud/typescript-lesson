var Student = /** @class */ (function () {
    function Student(name, color, number) {
        this.name = name;
        this.color = color;
        this.number = number;
    }
    return Student;
}());
var students = [
    new Student("Bill", "Blue", 1),
    new Student("Andrew", "Green", 2),
    new Student("Joe", "Red", 3),
    new Student("Luke", "Blue", 4),
    new Student("Eric", "Green", 5),
    new Student("Denise", "Red", 6),
    new Student("Lisa", "Blue", 7),
    new Student("Emilie", "Green", 8)
];
console.log(students);
