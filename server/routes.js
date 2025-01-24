const {
    fetchItems,
    addItem,
    updateItem,
    deleteItems,
    getTmdbDataController,
    getGoogleBooksDataController
} = require('./controller');

const routes = [
    {
        method: 'GET',
        url: '/api/things',
        handler: fetchItems
    },
    {
        method: 'POST',
        url: '/api/things',
        handler: addItem
    },
    {
        method: 'PUT',
        url: '/api/things/:id',
        handler: updateItem
    },
    {
        method: 'DELETE',
        url: '/api/things/:ids',
        handler: deleteItems
    },
    {
        method: 'GET',
        url: '/api/tmdb/search',
        handler: getTmdbDataController
    },
    {
        method: 'GET',
        url: '/api/googlebooks/search',
        handler: getGoogleBooksDataController
    }
];

module.exports = routes;
