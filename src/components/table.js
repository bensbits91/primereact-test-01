import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { types, statuses } from '../../constants';
import statusBodyTemplate from './body-templates/status';
import typeBodyTemplate from './body-templates/type';
import ratingBodyTemplate from './body-templates/rating';
import showSidebarButtonBodyTemplate from './body-templates/show-sidebar-button';
import { Rating } from 'primereact/rating';

const Table = ({
    items,
    handleSubmit /* ,
    handleSelectionChange,
    showDeleted,
    onShowDeletedItemsClick,
    handleDeleteItems */
}) => {
    // todo: move editors to ./editors/...
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
        console.log('bb ~ onCellEditComplete ~ e:', e);
        const { rowData, newRowData } = e;
        const wasChanged = JSON.stringify(rowData) !== JSON.stringify(newRowData);
        if (wasChanged) {
            handleSubmit(rowData, newRowData);
        }
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
                body={typeBodyTemplate}
                editor={(options) => typeEditor(options)}
                onCellEditComplete={onCellEditComplete}></Column>
            <Column
                field='status'
                header='Status'
                sortable={true}
                body={statusBodyTemplate}
                editor={(options) => statusEditor(options)}
                onCellEditComplete={onCellEditComplete}></Column>
            <Column
                field='rating'
                header='Rating'
                sortable={true}
                body={ratingBodyTemplate}
                editor={(options) => ratingEditor(options)}
                onCellEditComplete={onCellEditComplete}></Column>
            <Column header='Details' body={showSidebarButtonBodyTemplate}></Column>
        </DataTable>
    );
};

export default Table;
