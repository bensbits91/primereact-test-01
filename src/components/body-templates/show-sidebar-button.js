import React from 'react';
import { useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import { setIsSidebarVisible } from '../../redux/actions/action-creators';

const showSidebarButtonBodyTemplate = (rowData) => {
    const dispatch = useDispatch();

    const handleShow = (rowData) => {
        console.log('bb ~ handleShow ~ rowData:', rowData);
        dispatch(setIsSidebarVisible(true, rowData));
    };

    return (
        <Button
            type='button'
            icon='pi pi-info-circle'
            className='p-button-rounded p-button-warning'
            onClick={() => handleShow(rowData)}
        />
    );
};

export default showSidebarButtonBodyTemplate;
