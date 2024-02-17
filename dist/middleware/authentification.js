"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkoutVehicle = exports.checkoutRole = exports.checkoutPhoneNumber = exports.checkoutPassword = exports.checkoutUsername = exports.checkoutEmail = void 0;
const checkoutEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
};
exports.checkoutEmail = checkoutEmail;
const checkoutUsername = (username) => {
    const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/;
    return usernameRegex.test(username);
};
exports.checkoutUsername = checkoutUsername;
const checkoutPassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
};
exports.checkoutPassword = checkoutPassword;
const checkoutPhoneNumber = (phoneNumber) => {
    const phoneNumberRegex = /^[0-9]{10}$/;
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
