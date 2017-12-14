console.log("Ok");

var x:number = 0;
var y:number = 0;
var z = true;

function sayHello():string {
	return "Hello";
};

class Customer {
	Id: number;
	Name: string;

	public Log(): void {
		console.log(this.Id, this.Name);
	}

	constructor(id: number, name: string) {
		this.Id = id;
		this.Name = name;
	}
}

let cust:Customer = new Customer(1, "Max Tech Train"); 
cust.Log();

let custList = [
	new Customer(2, "P&G"),
	new Customer(3, "GE"),
	new Customer(4, "Great American"),
	new Customer(5, "TQL")
]

for(let cust of custList) {
	cust.Log();
}

class Student {
	Name: string;
	Color: string;
	Number: number;

	constructor(name: string, color: string, number: number) {
		this.Name = name;
		this.Color = color;
		this.Number = number;
	}

	public debug(): void {
		console.log(this.Number, this.Name, this.Color);
	}
}

let students:Student[] = [
	new Student("Sue Ann", "Green", 7),
	new Student("Greg", "Black", 4),
	new Student("Eric B", "Blue", 11),
	new Student("Bob", "Black", 13),
	new Student("Eric S", "Green", 13)
]

for(let student of students) {
	student.debug();
}