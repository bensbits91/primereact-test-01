import React from 'react';
import { Rating } from 'primereact/rating';

const RatingViewer = (item) => {
    return <Rating value={item.rating} readOnly stars={10} />;
};

export default RatingViewer;
