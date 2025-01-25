import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import { types } from '../../../constants';

const TypeEditor = (options) => {
    return (
        <Dropdown
            value={options.value}
            onChange={(e) => options.editorCallback(e.target.value)}
            placeholder='Select a type'
            options={types}
        />
    );
};

export default TypeEditor;
