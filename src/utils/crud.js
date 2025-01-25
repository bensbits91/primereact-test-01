import { v4 as uuidv4 } from 'uuid';
import { updateItemAction, createItemAction } from '../redux/actions/action-dispatchers';

export const handleSubmit = (dispatch, oldRowData, newRowData) => {
    console.log('bb ~ file: crud.js:5 ~ handleSubmit ~ newRowData:', newRowData);
    // todo: implement undo
    if (newRowData.id) {
        dispatch(updateItemAction(newRowData));
    } else {
        newRowData.id = uuidv4();
        dispatch(createItemAction(newRowData));
    }
};
