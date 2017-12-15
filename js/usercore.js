"use strict";
exports.__esModule = true;
var User_1 = require("./User");
var user_service_1 = require("./user.service");
var UserCore = /** @class */ (function () {
    function UserCore() {
        this.userSvc = new user_service_1.UserService();
        console.log("UserCore constructed!");
    }
    return UserCore;
}());
exports.UserCore = UserCore;
var uc = new UserCore();
var users = uc.userSvc.list();
console.log(users);
var usrs = uc.userSvc.get(1);
var usr;
if (usrs.length == 1) {
    usr = usrs[0];
    console.log(usr);
}
else {
    console.log("We have a serious error!!!");
}
// testing the add
var adduser = new User_1.User('gdoud', 'gdoud', 'greg', 'doud', '', '', true, true, true);
var rc = uc.userSvc.add(adduser);
console.log(rc);
console.log(uc.userSvc.list());
// testing the change
var getuser = uc.userSvc.get(1)[0];
getuser.password = "Train@MAX";
var rc1 = uc.userSvc.change(getuser);
console.log(rc1);
console.log(uc.userSvc.list());
// testing authenticate
var ausrs = uc.userSvc.authenticate('gdoud', 'Train@MAX');
if (ausrs.length == 0) {
    console.log("The username/password combination is not valid");
}
else {
    console.log("Login successful!");
}
// testing the remove
var rmuser = uc.userSvc.get(1)[0];
var rc2 = uc.userSvc.remove(rmuser);
console.log(rc2);
console.log(uc.userSvc.list());
