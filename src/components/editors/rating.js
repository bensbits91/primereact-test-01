import React from 'react';
import { Rating } from 'primereact/rating';

const RatingEditor = (options) => {
    return (
        <Rating
            value={options.value}
            onChange={(e) => options.editorCallback(e.target.value)}
            stars={10}
        />
    );
};

export default RatingEditor;
