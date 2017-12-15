import { User } from './User';
import { UserService } from './user.service';

export class UserCore {

	userSvc: UserService;

	constructor() {
		this.userSvc = new UserService();
		console.log("UserCore constructed!");
	}
}

let uc: UserCore = new UserCore();
let users: User[] = uc.userSvc.list();
console.log(users);
let usrs: User[] = uc.userSvc.get(1);
let usr: User;
if(usrs.length == 1) {
	usr = usrs[0];
	console.log(usr);
} else {
	console.log("We have a serious error!!!");
}
// testing the add
let adduser: User = 
	new User('gdoud','gdoud','greg','doud','', '', true, true, true);
let rc: string = uc.userSvc.add(adduser);
console.log(rc);
console.log(uc.userSvc.list());

// testing the change
let getuser: User = uc.userSvc.get(1)[0];
getuser.password = "Train@MAX";
let rc1: string = uc.userSvc.change(getuser);
console.log(rc1);
console.log(uc.userSvc.list());

// testing authenticate
let ausrs: User[] = uc.userSvc.authenticate('gdoud', 'Train@MAX');
if(ausrs.length == 0) {
	console.log("The username/password combination is not valid");
} else {
	console.log("Login successful!");
}


// testing the remove
let rmuser: User = uc.userSvc.get(1)[0];
let rc2: string = uc.userSvc.remove(rmuser);
console.log(rc2);
console.log(uc.userSvc.list());
