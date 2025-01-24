const axios = require('axios');
const {
    parsed: { GOOGLE_BOOKS_API_KEY, GOOGLE_BOOKS_BASE_URL }
} = require('dotenv').config({ path: '.env.local' });
const { makeSafeQueryString } = require('./utils');

// GET https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=yourAPIKey

const getGoogleBooksData = async (searchTerm) => {
    const safeSearchTerm = makeSafeQueryString(searchTerm);

    const url = `${GOOGLE_BOOKS_BASE_URL}?q=${safeSearchTerm}&key=${GOOGLE_BOOKS_API_KEY}`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json'
        }
    };
    try {
        const response = await axios.get(url, options);
        return response.data;
    } catch (error) {
        console.error('Error fetching data from third-party API:', error);
        throw error;
    }
};

module.exports = { getGoogleBooksData };
