import axios from 'axios';

export const fetchItemsFromApi = (showDeleted = false) => {
    return axios.get('/api/things', { params: { showDeleted } });
};

export const createItemInApi = (item) => {
    return axios.post('/api/things', item);
};

export const updateItemInApi = (item) => {
    return axios.put(`/api/things/${item.id}`, { item });
};

export const deleteItemsFromApi = (ids) => {
    return axios.delete(`/api/things/${ids}`);
};

export const fetchItemsFromTmdb = (searchTerm) => {
    return axios.get('/api/tmdb/search', { params: { searchTerm } });
};
