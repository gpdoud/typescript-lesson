var User = /** @class */ (function () {
    function User(userName, password, firstName, lastName, phone, email, admin, reviewer, active) {
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
    User.prototype.fullName = function () {
        return this.firstName + " " + this.lastName;
    };
    User.prototype.bool2Print = function (aBool) {
        return (aBool ? "Yes" : "No");
    };
    return User;
}());
var users = [
    new User('admin', 'admin', 'Super', 'Admin', '513-555-1212', 'admin@system.com', true, true, true),
    new User('review', 'review', 'Exclellent', 'Reviewer', '513-555-1212', 'reviewer@system.com', false, true, true),
    new User('user', 'user', 'Ordinary', 'User', '513-555-1212', 'user@system.com', false, false, true)
];
for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
    var user = users_1[_i];
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
