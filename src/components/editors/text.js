import React from 'react';
import { InputText } from 'primereact/inputtext';

const TextEditor = (options) => {
    return (
        <InputText
            type='text'
            value={options.value}
            onChange={(e) => options.editorCallback(e.target.value)}
            onKeyDown={(e) => e.stopPropagation()}
        />
    );
};

export default TextEditor;
