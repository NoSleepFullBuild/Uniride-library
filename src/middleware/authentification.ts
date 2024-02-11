export const checkoutEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
}

export const checkoutUsername = (username: string): boolean => {
    const usernameRegex = /^[a-zA-Z0-9._-]{3,}$/;
    return usernameRegex.test(username);
}

export const checkoutPassword = (password: string): boolean => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
}

export const checkoutPhoneNumber = (phoneNumber: string): boolean => {
    const phoneNumberRegex = /^[0-9]{10}$/;
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
