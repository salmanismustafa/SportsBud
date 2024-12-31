// File: /SportsBud/SportsBud/src/api/sportsApi.js

import axios from 'axios';

const API_BASE_URL = 'https://api.sportsdata.io/v4'; // Replace with actual sports API base URL
const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key

export const fetchGameSchedules = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/games`, {
            headers: {
                'User-Agent': 'SportsBud',
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching game schedules:', error);
        throw error;
    }
};

export const fetchRealTimeUpdates = async (gameId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/games/${gameId}/updates`, {
            headers: {
                'User-Agent': 'SportsBud',
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching real-time updates:', error);
        throw error;
    }
};

export const fetchPlayerStats = async (playerId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/players/${playerId}/stats`, {
            headers: {
                'User-Agent': 'SportsBud',
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching player stats:', error);
        throw error;
    }
};

export const fetchTeamStats = async (teamId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/teams/${teamId}/stats`, {
            headers: {
                'User-Agent': 'SportsBud',
                'Authorization': `Bearer ${API_KEY}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching team stats:', error);
        throw error;
    }
};