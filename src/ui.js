import React, { useEffect, useState } from 'react';
import { connect, useDispatch } from 'react-redux';
import {
    createItemAction,
    readItemsAction,
    updateItemAction,
    deleteItemsAction
} from './redux/actions/action-dispatchers';
import { handleSubmit } from './utils/crud';
import { Sidebar } from './components/sidebar';
import Table from './components/table';
import Menu from './components/menu';
import 'primereact/resources/themes/soho-dark/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
// import './ui.css';

const Ui = ({ items }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(readItemsAction());
    }, [dispatch]);

    // const [showDeleted, setShowDeleted] = useState(false); // todo: if this will be shared with other components, move to redux store
    // const [selectedIds, setSelectedIds] = useState([]); // todo: if this will be shared with other components, move to redux store

    // const onShowDeletedItemsClick = () => {
    //     // todo: move to table-menu.js?
    //     dispatch(readItemsAction(!showDeleted));
    //     setShowDeleted(!showDeleted);
    // };

    // const handleSelectionChange = (selectedIds) => {
    //     // todo: move to table.js?
    //     setSelectedIds(selectedIds);
    // };

    // const handleDeleteItems = () => {
    //     const confirmed = confirm('Are you sure you want to delete the selected items?');
    //     if (confirmed) {
    //         dispatch(deleteItemsAction(selectedIds));
    //     }
    // };

    // todo: this is a crude way to add an empty row to the table, need better way(s) to create an item
    const emptyItem = { name: '', type: undefined, status: undefined, rating: 0 }; // todo: move to table.js?
    const itemsWithEmptyRow = [...items, emptyItem]; // todo: move to table.js?

    return (
        <>
            {/* <h1>Things</h1> */}
            <Sidebar />
            <Menu />
            <Table
                items={itemsWithEmptyRow}
                handleSubmit={handleSubmit.bind(null, dispatch)}
                // handleSelectionChange={handleSelectionChange}
                // showDeleted={showDeleted}
                // onShowDeletedItemsClick={onShowDeletedItemsClick}
                // handleDeleteItems={handleDeleteItems}
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
