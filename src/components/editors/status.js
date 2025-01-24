import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import { statuses } from '../../../constants';

const StatusEditor = (options) => {
    return (
        <Dropdown
            value={options.value}
            onChange={(e) => options.editorCallback(e.target.value)}
            options={statuses}
            placeholder='Select a status'
        />
    );
};

export default StatusEditor;
