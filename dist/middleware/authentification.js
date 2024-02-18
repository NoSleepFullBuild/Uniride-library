"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutName = exports.checkoutVehicle = exports.checkoutRole = exports.checkoutPhoneNumber = exports.checkoutPassword = exports.checkoutUsername = exports.checkoutEmail = void 0;
const checkoutEmail = (email) => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailRegex.test(email);
};
exports.checkoutEmail = checkoutEmail;
const checkoutUsername = (username) => {
    const usernameRegex = /^[a-z0-9_-]{3,20}$/;
    return usernameRegex.test(username);
};
exports.checkoutUsername = checkoutUsername;
const checkoutPassword = (password) => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,50}$/;
    return passwordRegex.test(password);
};
exports.checkoutPassword = checkoutPassword;
const checkoutPhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneNumberRegex.test(phoneNumber);
};
exports.checkoutPhoneNumber = checkoutPhoneNumber;
const checkoutRole = (role) => {
    const roleRegex = /^(user|admin)$/;
    return roleRegex.test(role);
};
exports.checkoutRole = checkoutRole;
const checkoutVehicle = (vehicle) => {
    const vehicleRegex = /^[a-zA-Z0-9._-]{3,}$/;
    return vehicleRegex.test(vehicle);
};
exports.checkoutVehicle = checkoutVehicle;
const checkoutName = (name) => {
    const nameRegex = /^[a-zA-Z-\s]{2,50}$/;
    return nameRegex.test(name);
};
exports.checkoutName = checkoutName;
