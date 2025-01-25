import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {
    ImageViewer,
    RatingViewer,
    ShowSidebarButton,
    StatusViewer,
    TypeViewer
} from './viewers';
import { RatingEditor, StatusEditor, TextEditor, TypeEditor } from './editors';

const Table = ({
    items,
    handleSubmit /* ,
    handleSelectionChange,
    showDeleted,
    onShowDeletedItemsClick,
    handleDeleteItems */
}) => {
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
                header='Image'
                body={(rowData) =>
                    ImageViewer({ item: rowData, imgWidth: '60' })
                }></Column>
            <Column
                field='name'
                header='Name'
                sortable={true}
                editor={(options) => TextEditor(options)}
                onCellEditComplete={onCellEditComplete}></Column>
            <Column
                field='type'
                header='Type'
                body={(rowData) => TypeViewer({ item: rowData })}
                editor={(options) => TypeEditor(options)}
                onCellEditComplete={onCellEditComplete}></Column>
            <Column
                field='status'
                header='Status'
                sortable={true}
                body={(rowData) => StatusViewer({ item: rowData })}
                editor={(options) => StatusEditor(options)}
                onCellEditComplete={onCellEditComplete}></Column>
            <Column
                field='rating'
                header='Rating'
                sortable={true}
                body={(rowData) => RatingViewer({ item: rowData })}
                editor={(options) => RatingEditor(options)}
                onCellEditComplete={onCellEditComplete}></Column>
            <Column header='Details' body={ShowSidebarButton}></Column>
        </DataTable>
    );
};

export default Table;
