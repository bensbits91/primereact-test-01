const { Thing } = require('./models/things');
const { getTmdbData } = require('./external-apis/tmdb');

const fetchItems = async (request, reply) => {
    const showDeletedQueryValue =
        request.query.showDeleted === 'true'
            ? { isSoftDeleted: true }
            : { $or: [{ isSoftDeleted: { $exists: false } }, { isSoftDeleted: false }] };

    try {
        const items = await Thing.find(showDeletedQueryValue);
        return items;
    } catch (err) {
        console.log(err);
    }
};

const addItem = async (request, reply) => {
    try {
        const NewItem = new Thing({ ...request.body });
        return NewItem.save();
    } catch (err) {
        console.log(err.errors);
        return err.errors;
    }
};

const updateItem = async (request, reply) => {
    try {
        const { id } = request.params;
        const { item } = request.body;
        const updatedItem = await Thing.findOneAndUpdate({ id }, item, { new: true });
        return updatedItem;
    } catch (err) {
        console.log(err);
    }
};

const deleteItems = async (request, reply) => {
    const { ids } = request.params;
    const idsToArray = ids.split(',');
    try {
        const deletedItems = await Thing.deleteMany({ id: { $in: idsToArray } });
        return { responseData: deletedItems, ids: idsToArray };
    } catch (err) {
        console.log(err);
    }
};

const getTmdbDataController = async (request, reply) => {
    const { searchTerm, type } = request.query;
    try {
        const data = await getTmdbData(searchTerm, type);
        reply.send(data);
    } catch (error) {
        reply.status(500).send({ error: 'Failed to fetch data from TMDB API' });
    }
};

module.exports = { fetchItems, addItem, updateItem, deleteItems, getTmdbDataController };
