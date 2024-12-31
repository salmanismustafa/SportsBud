// src/actions/gpt4Action.js

import axios from 'axios';

const GPT4_API_URL = 'https://api.openai.com/v1/chat/completions';
const API_KEY = process.env.GPT4_API_KEY;

export const getGpt4Response = async (userInput) => {
    try {
        const response = await axios.post(GPT4_API_URL, {
            model: 'gpt-4',
            messages: [{ role: 'user', content: userInput }],
        }, {
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        return response.data.choices[0].message.content;
    } catch (error) {
        console.error('Error fetching GPT-4 response:', error);
        throw new Error('Failed to fetch response from GPT-4');
    }
};