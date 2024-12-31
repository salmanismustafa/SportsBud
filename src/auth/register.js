export const registerUser = async (userData) => {
    const { username, email, password } = userData;

    // Validate user data
    if (!username || !email || !password) {
        throw new Error("All fields are required.");
    }

    // Here you would typically hash the password and save the user to the database
    // For example, using bcrypt to hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to the database (pseudo-code)
    const newUser = {
        username,
        email,
        password: hashedPassword,
    };

    // Assume saveUser is a function that saves the user to the database
    const savedUser = await saveUser(newUser);

    return savedUser;
};