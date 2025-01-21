import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
    createItemAction,
    readItemsAction,
    updateItemAction,
    deleteItemsAction
} from './redux/actions/actions';
import Table from './components/table';
// import './ui.css';

const Ui = ({ items }) => {
    const [showDeleted, setShowDeleted] = useState(false);
    const [selectedIds, setSelectedIds] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readItemsAction());
    }, [dispatch]);

    const handleSubmit = (oldRowData, newRowData) => {
        if (newRowData.id) {
            dispatch(updateItemAction(newRowData));
        } else {
            newRowData.id = uuidv4();
            dispatch(createItemAction(newRowData));
        }
    };

    const onShowDeletedItemsClick = () => {
        dispatch(readItemsAction(!showDeleted));
        setShowDeleted(!showDeleted);
    };

    const handleSelectionChange = (selectedIds) => {
        setSelectedIds(selectedIds);
    };

    const handleDeleteItems = () => {
        const confirmed = confirm('Are you sure you want to delete the selected items?');
        if (confirmed) {
            dispatch(deleteItemsAction(selectedIds));
        }
    };

    const itemsWithEmptyRow = [...items, {}];

    return (
        <>
            <h1>Things</h1>
            <Table
                items={itemsWithEmptyRow}
                handleSubmit={handleSubmit}
                handleSelectionChange={handleSelectionChange}
                showDeleted={showDeleted}
                onShowDeletedItemsClick={onShowDeletedItemsClick}
                handleDeleteItems={handleDeleteItems}
            />
        </>
    );
};

// subscribing to redux store updates
const mapStateToProps = (state) => ({
    items: state.items
});

// connecting our main component to redux store
export default connect(mapStateToProps, {
    createItemAction,
    readItemsAction,
    updateItemAction,
    deleteItemsAction
})(Ui);
