import {
    fetchItemsFromApi,
    createItemInApi,
    updateItemInApi,
    deleteItemsFromApi
} from '../../api';

import { getTmdbData } from '../../external-apis/tmdb';

export const GET_TMDB_DATA_BEGIN = 'Begin fetching TMDB data';
export const GET_TMDB_DATA_SUCCESS = 'TMDB data fetched successfully';
export const GET_TMDB_DATA_FAILURE = 'Failed to fetch TMDB data';

export const getTmdbDataBegin = () => ({
    type: GET_TMDB_DATA_BEGIN
});
export const getTmdbDataSuccess = (data) => ({
    type: GET_TMDB_DATA_SUCCESS,
    payload: { data }
});
export const getTmdbDataFailure = (errors) => ({
    type: GET_TMDB_DATA_FAILURE,
    payload: { errors }
});

export const getTmdbDataAction = () => {
    return (dispatch) => {
        dispatch(getTmdbDataBegin());
        getTmdbData()
            .then((data) => {
                console.log('bb ~  ~ file: actions.js:31 ~ .then ~ data:', data);
                dispatch(getTmdbDataSuccess(data));
            })
            .catch((error) => dispatch(getTmdbDataFailure(error)));
    };
};

export const SET_IS_PANEL_VISIBLE = 'Show or hide panel';

export const setIsPanelVisible = (visible, panelData) => ({
    type: SET_IS_PANEL_VISIBLE,
    payload: { visible, panelData }
});

export const CREATE_ITEM_SUCCESS = 'Item created successfully';
export const CREATE_ITEM_FAILURE = 'Failed to create item';
export const FETCH_ITEMS_BEGIN = 'Begin fetching items';
export const FETCH_ITEMS_SUCCESS = 'Items fetched successfully';
export const FETCH_ITEMS_FAILURE = 'Failed to fetch items';
export const UPDATE_ITEM_SUCCESS = 'Item updated successfully';
export const UPDATE_ITEM_FAILURE = 'Failed to update item';
export const DELETE_ITEMS_SUCCESS = 'Items deleted successfully';
export const DELETE_ITEMS_FAILURE = 'Failed to delete items';

export const createItemSuccess = (item) => ({
    type: CREATE_ITEM_SUCCESS,
    payload: { item }
});
export const createItemFailure = (errors) => ({
    type: CREATE_ITEM_FAILURE,
    payload: { errors }
});
export const fetchItemsBegin = () => ({
    type: FETCH_ITEMS_BEGIN
});
export const fetchItemsSuccess = (items) => ({
    type: FETCH_ITEMS_SUCCESS,
    payload: { items }
});
export const fetchItemsFailure = (errors) => ({
    type: FETCH_ITEMS_FAILURE,
    payload: { errors }
});
export const updateItemSuccess = (item) => ({
    type: UPDATE_ITEM_SUCCESS,
    payload: { item }
});
export const updateItemFailure = (errors) => ({
    type: UPDATE_ITEM_FAILURE,
    payload: { errors }
});
export const deleteItemsSuccess = (ids) => ({
    type: DELETE_ITEMS_SUCCESS,
    payload: { ids }
});
export const deleteItemsFailure = (errors) => ({
    type: DELETE_ITEMS_FAILURE,
    payload: { errors }
});

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

export const createItemAction = (item) => {
    return (dispatch) => {
        createItemInApi(item)
            .then(({ data }) => {
                dispatch(createItemSuccess(data));
            })
            .catch((error) => dispatch(createItemFailure(error)));
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
