import React, { useState } from 'react';
import { useAuth } from '../../auth/auth';

const PreferencesPage = () => {
    const { user, updatePreferences } = useAuth();
    const [preferences, setPreferences] = useState(user.preferences || {});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPreferences({
            ...preferences,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updatePreferences(preferences);
    };

    return (
        <div>
            <h1>Preferences</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Favorite Team:
                    <input
                        type="text"
                        name="favoriteTeam"
                        value={preferences.favoriteTeam || ''}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    Preferred Sports:
                    <input
                        type="text"
                        name="preferredSports"
                        value={preferences.preferredSports || ''}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button type="submit">Save Preferences</button>
            </form>
        </div>
    );
};

export default PreferencesPage;