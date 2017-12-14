class Student {
	name: string;
	color: string;
	number: number;

	display(): void {
		console.log(this);
	}

	constructor(name: string, color: string, number:number) {
		this.name = name;
		this.color = color;
		this.number = number;
	}
}

let students: Student[] = [
	new Student("Bill", "Blue", 1),
	new Student("Andrew", "Green", 2),
	new Student("Joe", "Red", 3),
	new Student("Luke", "Blue", 4),
	new Student("Eric", "Green", 5),
	new Student("Denise", "Red", 6),
	new Student("Lisa", "Blue", 7),
	new Student("Emilie", "Green", 8)
];

for(let student of students) {
	student.display();
}