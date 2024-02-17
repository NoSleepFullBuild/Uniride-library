"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authentification_1 = require("./authentification");
describe('Authentification', () => {
    describe('checkoutEmail', () => {
        it('should return true for valid email', () => {
            expect((0, authentification_1.checkoutEmail)('test@example.com')).toBeTruthy();
        });
        it('should return false for invalid email', () => {
            expect((0, authentification_1.checkoutEmail)('test@example')).toBeFalsy();
        });
    });
    describe('checkoutUsername', () => {
        it('should return true for valid username', () => {
            expect((0, authentification_1.checkoutUsername)('user_123')).toBeTruthy();
        });
        it('should return false for invalid username', () => {
            expect((0, authentification_1.checkoutUsername)('us')).toBeFalsy(); // Moins de 3 caractères
        });
    });
    describe('checkoutPassword', () => {
        it('should return true for valid password', () => {
            expect((0, authentification_1.checkoutPassword)('password1')).toBeTruthy();
        });
        it('should return false for invalid password', () => {
            expect((0, authentification_1.checkoutPassword)('pass')).toBeFalsy(); // Ne respecte pas la longueur minimale et les conditions
        });
    });
    describe('checkoutPhoneNumber', () => {
        it('should return true for valid phone number', () => {
            expect((0, authentification_1.checkoutPhoneNumber)('1234567890')).toBeTruthy();
        });
        it('should return false for invalid phone number', () => {
            expect((0, authentification_1.checkoutPhoneNumber)('123456789')).toBeFalsy(); // Ne respecte pas la longueur
        });
    });
    describe('checkoutRole', () => {
        it('should return true for valid role', () => {
            expect((0, authentification_1.checkoutRole)('user')).toBeTruthy();
        });
        it('should return false for invalid role', () => {
            expect((0, authentification_1.checkoutRole)('admin_user')).toBeFalsy(); // Ne respecte pas le format
        });
    });
});
