"use strict";
exports.__esModule = true;
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
    return User;
}());
exports.User = User;
