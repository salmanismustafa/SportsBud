import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../auth/auth';

const HomePage = () => {
    const { user } = useAuth();

    return (
        <div className="home-page">
            <h1>Welcome to SportsBud</h1>
            {user ? (
                <div>
                    <h2>Hello, {user.username}!</h2>
                    <p>Your personalized sports experience awaits.</p>
                    <Link to="/preferences">Set Your Preferences</Link>
                </div>
            ) : (
                <div>
                    <p>Please log in to access personalized features.</p>
                    <Link to="/login">Login</Link>
                    <br />
                    <Link to="/register">Register</Link>
                </div>
            )}
        </div>
    );
};

export default HomePage;