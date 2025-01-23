// action creators contain action types and (optionally) payloads

import {
    CREATE_ITEM_SUCCESS,
    CREATE_ITEM_FAILURE,
    FETCH_ITEMS_BEGIN,
    FETCH_ITEMS_SUCCESS,
    FETCH_ITEMS_FAILURE,
    UPDATE_ITEM_SUCCESS,
    UPDATE_ITEM_FAILURE,
    DELETE_ITEMS_SUCCESS,
    DELETE_ITEMS_FAILURE,
    GET_TMDB_DATA_BEGIN,
    GET_TMDB_DATA_SUCCESS,
    GET_TMDB_DATA_FAILURE,
    SET_IS_SIDEBAR_VISIBLE
} from './action-types';

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

export const setIsSidebarVisible = (visible, sidebarData, sidebarDataOptions) => ({
    type: SET_IS_SIDEBAR_VISIBLE,
    payload: { visible, sidebarData, sidebarDataOptions }
});
