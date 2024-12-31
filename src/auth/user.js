class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
    }

    // Method to get user details
    getUserDetails() {
        return {
            username: this.username,
            email: this.email,
        };
    }

    // Method to update user email
    updateEmail(newEmail) {
        this.email = newEmail;
    }

    // Additional user-related methods can be added here
}

export default User;