import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { types, statuses } from '../../constants';
import { setIsPanelVisible } from '../redux/actions/actions';

const Table = ({
    items,
    handleSubmit/* ,
    handleSelectionChange,
    showDeleted,
    onShowDeletedItemsClick,
    handleDeleteItems */
}) => {
    const dispatch = useDispatch();

    const textEditor = (options) => {
        return (
            <InputText
                type='text'
                value={options.value}
                onChange={(e) => options.editorCallback(e.target.value)}
                onKeyDown={(e) => e.stopPropagation()}
            />
        );
    };

    const typeEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                onChange={(e) => options.editorCallback(e.target.value)}
                placeholder='Select a type'
                options={types}
            />
        );
    };

    const statusEditor = (options) => {
        return (
            <Dropdown
                value={options.value}
                onChange={(e) => options.editorCallback(e.target.value)}
                options={statuses}
                placeholder='Select a status'
            />
        );
    };

    const ratingBodyTemplate = (item) => {
        return <Rating value={item.rating} readOnly stars={10} />;
    };

    const ratingEditor = (options) => {
        return (
            <Rating
                value={options.value}
                onChange={(e) => options.editorCallback(e.target.value)}
                stars={10}
            />
        );
    };

    const onCellEditComplete = (e) => {
        console.log('bb ~  ~ file: table.js:32 ~ onCellEditComplete ~ e:', e);
        const { rowData, newRowData } = e;
        const wasChanged = JSON.stringify(rowData) !== JSON.stringify(newRowData);
        if (wasChanged) {
            handleSubmit(rowData, newRowData);
        }
    };

    // const handleShow = () => {
    //     dispatch(setIsPanelVisible(true));
    // };
    const buttonBodyTemplate = () => {
        return (
            <Button
                type='button'
                icon='pi pi-trash'
                className='p-button-rounded p-button-danger'
                onClick={dispatch(setIsPanelVisible(true)}
            />
        );
    };

    return (
        <DataTable
            value={items}
            editMode='cell'
            size='small'
            stripedRows
            sortMode='multiple'
            removableSort
            // frozenValue={[]}
            tableStyle={{ minWidth: '50rem' }}>
            <Column
                field='name'
                header='Name'
                sortable={true}
                editor={(options) => textEditor(options)}
                onCellEditComplete={onCellEditComplete}></Column>
            <Column
                field='type'
                header='Type'
                editor={(options) => typeEditor(options)}
                onCellEditComplete={onCellEditComplete}></Column>
            <Column
                field='status'
                header='Status'
                sortable={true}
                editor={(options) => statusEditor(options)}
                onCellEditComplete={onCellEditComplete}></Column>
            <Column
                field='rating'
                header='Rating'
                sortable={true}
                body={ratingBodyTemplate}
                editor={(options) => ratingEditor(options)}
                onCellEditComplete={onCellEditComplete}></Column>
            <Column
                header='Details'
                body={buttonBodyTemplate}></Column>
        </DataTable>
    );
};

export default Table;
