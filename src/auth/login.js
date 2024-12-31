// src/auth/login.js

import { authenticateUser } from './auth';
import jwt from 'jsonwebtoken';

const SECRET_KEY = 'your_secret_key'; // Replace with your actual secret key

export const loginUser = async (username, password) => {
    const user = await authenticateUser(username, password);
    
    if (!user) {
        throw new Error('Invalid credentials');
    }

    const token = jwt.sign({ id: user.id, username: user.username }, SECRET_KEY, { expiresIn: '1h' });
    return token;
};