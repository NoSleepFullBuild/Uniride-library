export const checkoutEmail = (email: string): boolean => {
    const emailRegex = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    return emailRegex.test(email);
}

export const checkoutUsername = (username: string): boolean => {
    const usernameRegex = /^[a-z0-9_-]{3,20}$/;
    return usernameRegex.test(username);
}

export const checkoutPassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,50}$/;
    return passwordRegex.test(password);
}

export const checkoutPhoneNumber = (phoneNumber: string): boolean => {
    const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return phoneNumberRegex.test(phoneNumber);
}

export const checkoutRole = (role: string): boolean => {
    const roleRegex = /^(user|admin)$/;
    return roleRegex.test(role);
}

export const checkoutVehicle = (vehicle: string): boolean => {
    const vehicleRegex = /^[a-zA-Z0-9._-]{3,}$/;
    return vehicleRegex.test(vehicle);
}

export const checkoutName = (name: string): boolean => {
    const nameRegex = /^[a-zA-Z-\s]{2,50}$/;
    return nameRegex.test(name);
}