const axios = require('axios');
const {
    parsed: { GIANTBOMB_API_KEY, GIANTBOMB_BASE_URL }
} = require('dotenv').config({ path: '.env.local' });
const { makeSafeQueryString } = require('./utils');

const getGiantBombData = async (searchTerm) => {
    const safeSearchTerm = makeSafeQueryString(searchTerm);

    const url = `${GIANTBOMB_BASE_URL}/search?query=${safeSearchTerm}&api_key=${GIANTBOMB_API_KEY}&format=json`;
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

module.exports = { getGiantBombData };
