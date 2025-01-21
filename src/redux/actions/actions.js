import {
    fetchItemsFromApi,
    createItemInApi,
    updateItemInApi,
    deleteItemsFromApi
} from '../../api';

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
