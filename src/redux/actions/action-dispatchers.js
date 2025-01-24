// asynchronous action dispatchers (thunks)

import {
    fetchItemsFromApi,
    createItemInApi,
    updateItemInApi,
    deleteItemsFromApi,
    fetchItemsFromTmdb,
    fetchItemsFromGoogleBooks
} from '../../api';

import {
    createItemSuccess,
    createItemFailure,
    fetchItemsBegin,
    fetchItemsSuccess,
    fetchItemsFailure,
    updateItemSuccess,
    updateItemFailure,
    deleteItemsSuccess,
    deleteItemsFailure,
    getGoogleBooksDataBegin,
    getGoogleBooksDataSuccess,
    getGoogleBooksDataFailure,
    getTmdbDataBegin,
    getTmdbDataSuccess,
    getTmdbDataFailure
} from './action-creators';

export const createItemAction = (item) => {
    return (dispatch) => {
        createItemInApi(item)
            .then(({ data }) => {
                dispatch(createItemSuccess(data));
            })
            .catch((error) => dispatch(createItemFailure(error)));
    };
};
export const readItemsAction = (showDeleted = false) => {
    return (dispatch) => {
        dispatch(fetchItemsBegin());
        fetchItemsFromApi(showDeleted)
            .then(({ data }) => {
                dispatch(fetchItemsSuccess(data));
            })
            .catch((error) => dispatch(fetchItemsFailure(error)));
    };
};
export const updateItemAction = (item) => {
    return (dispatch) => {
        updateItemInApi(item)
            .then(({ data }) => {
                dispatch(updateItemSuccess(data));
            })
            .catch((error) => dispatch(updateItemFailure(error)));
    };
};
export const deleteItemsAction = (ids) => {
    return (dispatch) => {
        deleteItemsFromApi(ids)
            .then(({ data }) => {
                dispatch(deleteItemsSuccess(data.ids));
            })
            .catch((error) => dispatch(deleteItemsFailure(error)));
    };
};

export const getTmdbDataAction = (searchTerm, type) => {
    return (dispatch) => {
        dispatch(getTmdbDataBegin());
        fetchItemsFromTmdb(searchTerm, type)
            .then((data) => {
                dispatch(getTmdbDataSuccess(data));
            })
            .catch((error) => dispatch(getTmdbDataFailure(error)));
    };
};

export const getGoogleBooksDataAction = (searchTerm) => {
    return (dispatch) => {
        dispatch(getGoogleBooksDataBegin());
        fetchItemsFromGoogleBooks(searchTerm)
            .then((data) => {
                dispatch(getGoogleBooksDataSuccess(data));
            })
            .catch((error) => dispatch(getGoogleBooksDataFailure(error)));
    };
};
