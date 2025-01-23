const axios = require('axios');
const {
    parsed: { TMDB_BASE_URL, TMDB_TOKEN }
} = require('dotenv').config({ path: '.env.local' });

const getTmdbData = async (searchTerm) => {
    const url = `${TMDB_BASE_URL}/search/tv?query=${searchTerm}&include_adult=false&language=en-US&page=1`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${TMDB_TOKEN}`
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

module.exports = { getTmdbData };
