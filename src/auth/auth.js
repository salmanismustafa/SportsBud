// src/auth/auth.js

import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { User } from './user';

const SECRET_KEY = process.env.SECRET_KEY || 'your_secret_key';

export const authenticateUser = async (username, password) => {
    const user = await User.findOne({ username });
    if (!user) {
        throw new Error('User not found');
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw new Error('Invalid password');
    }
    const token = jwt.sign({ id: user._id }, SECRET_KEY, { expiresIn: '1h' });
    return token;
};

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, SECRET_KEY);
    } catch (error) {
        throw new Error('Invalid token');
    }
};

export const getUserFromToken = (token) => {
    const decoded = verifyToken(token);
    return User.findById(decoded.id);
};