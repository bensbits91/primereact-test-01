import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
    createItemAction,
    readItemsAction,
    updateItemAction,
    deleteItemsAction
} from './redux/actions/action-dispatchers';
import Sidebar from './components/sidebar';
import Table from './components/table';
import TableMenu from './components/table-menu';
import 'primereact/resources/themes/lara-dark-teal/theme.css';
import 'primeicons/primeicons.css';
// import './ui.css';

const Ui = ({ items }) => {
    const [showDeleted, setShowDeleted] = useState(false); // todo: if this will be shared with other components, move to redux store
    const [selectedIds, setSelectedIds] = useState([]); // todo: if this will be shared with other components, move to redux store

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

    const onShowDeletedItemsClick = () => { // todo: move to table-menu.js?
        dispatch(readItemsAction(!showDeleted));
        setShowDeleted(!showDeleted);
    };

    const handleSelectionChange = (selectedIds) => { // todo: move to table.js?
        setSelectedIds(selectedIds);
    };

    const handleDeleteItems = () => {
        const confirmed = confirm('Are you sure you want to delete the selected items?');
        if (confirmed) {
            dispatch(deleteItemsAction(selectedIds));
        }
    };

    const emptyItem = { name: '', type: undefined, status: undefined, rating: 0 }; // todo: move to table.js?
    const itemsWithEmptyRow = [...items, emptyItem]; // todo: move to table.js?

    return (
        <>
            <h1>Things</h1>
            <Sidebar />
            <TableMenu />
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
