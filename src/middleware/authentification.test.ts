import { checkoutEmail, checkoutPassword, checkoutPhoneNumber, checkoutRole, checkoutUsername } from './authentification';

describe('Authentification', () => {

    describe('checkoutEmail', () => {
        it('should return true for valid email', () => {
            expect(checkoutEmail('test@example.com')).toBeTruthy();
        });

        it('should return false for invalid email', () => {
            expect(checkoutEmail('test@example')).toBeFalsy();
        });
    });

    describe('checkoutUsername', () => {
        it('should return true for valid username', () => {
            expect(checkoutUsername('user_123')).toBeTruthy();
        });

        it('should return false for invalid username', () => {
            expect(checkoutUsername('us')).toBeFalsy(); // Moins de 3 caractères
        });
    });

    describe('checkoutPassword', () => {
        it('should return true for valid password', () => {
            expect(checkoutPassword('Password123-')).toBeTruthy();
        });

        it('should return false for invalid password', () => {
            expect(checkoutPassword('password1')).toBeFalsy(); // Ne respecte pas la longueur minimale et les conditions
        });
    });

    describe('checkoutPhoneNumber', () => {
        it('should return true for valid phone number', () => {
            expect(checkoutPhoneNumber('1234567890')).toBeTruthy();
        });

        it('should return false for invalid phone number', () => {
            expect(checkoutPhoneNumber('123456789')).toBeFalsy(); // Ne respecte pas la longueur
        });
    });

    describe('checkoutRole', () => {
        it('should return true for valid role', () => {
            expect(checkoutRole('user')).toBeTruthy();
        });

        it('should return false for invalid role', () => {
            expect(checkoutRole('admin_user')).toBeFalsy(); // Ne respecte pas le format
        });
    });
    
});
