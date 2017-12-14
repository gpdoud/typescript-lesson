class User {
	id: number;
	userName: string;
	password: string;
	firstName: string;
	lastName: string;
	phone: string;
	email: string;
	admin: boolean;
	reviewer: boolean;
	active: boolean;

	fullName(): string {
		return this.firstName + " " + this.lastName;
	}
	bool2Print(aBool: boolean): string {
		return (aBool ? "Yes" : "No");
	}
	constructor(
		userName: string,
		password: string,
		firstName: string,
		lastName: string,
		phone: string, 
		email: string,
		admin: boolean,
		reviewer: boolean,
		active: boolean
	) {
		this.userName = userName;
		this.password = password;
		this.firstName = firstName;
		this.lastName = lastName;
		this.phone = phone;
		this.email = email;
		this.admin = admin;
		this.reviewer = reviewer;
		this.active = active;
	}
}

let users: User[] = [
	new User('admin', 'admin', 'Super', 'Admin', '513-555-1212', 'admin@system.com', true, true, true),
	new User('review', 'review', 'Exclellent', 'Reviewer', '513-555-1212', 'reviewer@system.com', false, true, true),
	new User('user', 'user', 'Ordinary', 'User', '513-555-1212', 'user@system.com', false, false, true)
];

for(let user of users) {
	console.log("Username   : ", user.userName);
	console.log("Password   : ", user.password);
	console.log("Full name  : ", user.fullName());
	console.log("Phone      : ", user.phone);
	console.log("Email      : ", user.email);
	console.log("Is Admin   : ", user.bool2Print(user.admin));
	console.log("Is Reviewer: ", user.bool2Print(user.reviewer));
	console.log("Is Active  : ", user.bool2Print(user.active));
	console.log("******************************************");

}