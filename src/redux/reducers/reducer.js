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
    SET_IS_PANEL_VISIBLE
} from '../actions/actions';

// initial state for redux store
const initialState = {
    items: [], // todo: better name for the items
    isPanelVisible: false
};

// todo: move to separate file ???
// todo: learn about combineReducers
// reducer function to show or hide the sidebar
// const visibleReducer = (state = false, action) => {
//     switch (action.type) {
//         case SET_VISIBLE:
//             return action.payload;
//         default:
//             return state;
//     }
// };

// main reducer function
export default function (state = initialState, action) {
    switch (action.type) {
        case CREATE_ITEM_SUCCESS: {
            const newItem = { ...action.payload.item };
            const newItems = [...state.items].append(newItem); // todo: better to use unshift? any other way?
            return {
                ...state,
                items: newItems
            };
        }
        case CREATE_ITEM_FAILURE:
            return {
                ...state,
                errors: action.payload.errors
            };

        case FETCH_ITEMS_BEGIN:
            return {
                ...state,
                loading: true,
                errors: null
            };
        case FETCH_ITEMS_SUCCESS:
            return {
                ...state,
                loading: false,
                items: action.payload.items
            };
        case FETCH_ITEMS_FAILURE:
            return {
                ...state,
                loading: false,
                errors: action.payload.errors,
                items: []
            };

        case UPDATE_ITEM_SUCCESS: {
            const updatedItem = { ...action.payload.item };
            const newItems = [...state.items].map((item) => {
                if (item.id === updatedItem.id) {
                    return updatedItem;
                }
                return item;
            });
            return {
                ...state,
                items: newItems
            };
        }
        case UPDATE_ITEM_FAILURE:
            return {
                ...state,
                errors: action.payload.errors
            };

        case DELETE_ITEMS_SUCCESS: {
            const { ids } = action.payload;
            return {
                items: [...state.items].filter((item) => !ids.includes(item.id))
            };
        }
        case DELETE_ITEMS_FAILURE:
            return {
                ...state,
                errors: action.payload.errors
            };

        case SET_IS_PANEL_VISIBLE:
            return {
                ...state,
                isPanelVisible: action.payload
            };

        default:
            return state;
    }
}
