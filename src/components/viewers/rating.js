import React from 'react';
import { Rating } from 'primereact/rating';

const RatingViewer = ({ item }) => {
    const { rating } = item;
    return <Rating value={rating} readOnly stars={10} />;
};

export default RatingViewer;
