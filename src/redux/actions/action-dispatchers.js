// asynchronous action dispatchers (thunks)

import {
    fetchItemsFromApi,
    createItemInApi,
    updateItemInApi,
    deleteItemsFromApi
} from '../../api';
import { getTmdbData } from '../../external-apis/tmdb';

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

export const getTmdbDataAction = (searchTerm) => {
    return (dispatch) => {
        dispatch(getTmdbDataBegin());
        getTmdbData(searchTerm)
            .then((data) => {
                console.log('bb ~  ~ file: actions.js:118 ~ .then ~ data:', data);
                dispatch(getTmdbDataSuccess(data));
            })
            .catch((error) => dispatch(getTmdbDataFailure(error)));
    };
};
