const { fetchItems, addItem, updateItem, deleteItems } = require('./controller');

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
    }
];

module.exports = routes;
