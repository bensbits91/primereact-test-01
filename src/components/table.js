import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Rating } from 'primereact/rating';
import { Button } from 'primereact/button';
import { types, statuses } from '../../constants';
import { setIsSidebarVisible } from '../redux/actions/action-creators';
import { Tag } from 'primereact/tag';

const Table = ({
    items,
    handleSubmit /* ,
    handleSelectionChange,
    showDeleted,
    onShowDeletedItemsClick,
    handleDeleteItems */
}) => {
    const dispatch = useDispatch();

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

    // todo: move body templates to ./body-templates/...
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
        console.log('bb ~ onCellEditComplete ~ e:', e);
        const { rowData, newRowData } = e;
        const wasChanged = JSON.stringify(rowData) !== JSON.stringify(newRowData);
        if (wasChanged) {
            handleSubmit(rowData, newRowData);
        }
    };

    const handleShow = (rowData) => {
        console.log('bb ~ handleShow ~ rowData:', rowData);
        dispatch(setIsSidebarVisible(true, rowData));
    };
    const buttonBodyTemplate = (rowData) => {
        return (
            <Button
                type='button'
                icon='pi pi-info-circle'
                className='p-button-rounded p-button-warning'
                onClick={() => handleShow(rowData)}
            />
        );
    };

    const typeBodyTemplate = (item) => {
        const itemType = item && item.type ? item.type : '';
        let iconCode = '';
        switch (itemType) {
            case 'Book':
                iconCode = 'pi pi-book';
                break;
            case 'Movie':
                iconCode = 'pi pi-video';
                break;
            case 'TV':
                iconCode = 'pi pi-desktop';
                break;
            case 'Video Game':
                iconCode = 'pi pi-discord';
                break;
            default:
                iconCode = 'pi pi-question';
        }

        return (
            <span className={`type-badge type-${itemType.toLowerCase()}`}>
                <i className={`pi ${iconCode}`}></i>
                {itemType}
            </span>
        );
    };

    const statusBodyTemplate = (item) => {
        const status = item && item.status ? item.status : '';
        let color = '';
        let iconCode = '';
        switch (status) {
            case 'Now':
                color = 'warning';
                iconCode = 'pi pi-play';
                break;
            case 'Past':
                color = 'success';
                iconCode = 'pi pi-check';
                break;
            case 'Future':
                color = 'info';
                iconCode = 'pi pi-calendar';
                break;
            case 'On Hold':
                color = 'info';
                iconCode = 'pi pi-pause';
                break;
            case 'Dropped':
                color = 'danger';
                iconCode = 'pi pi-times';
                break;
            default:
                color = 'secondary';
                iconCode = 'pi pi-question';
        }

        return <Tag value={status} severity={color} icon={iconCode} />;
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
            <Column header='Details' body={buttonBodyTemplate}></Column>
        </DataTable>
    );
};

export default Table;
