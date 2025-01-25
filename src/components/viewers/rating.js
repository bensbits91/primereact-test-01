import React from 'react';
import { Rating } from 'primereact/rating';

const RatingViewer = (item) => {
    let rating = item && item.rating ? item.rating : 0;
    // todo: this is a hack, need to fix this
    if (item.thing) {
        rating = item.thing.rating;
    }
    return <Rating value={rating} readOnly stars={10} />;
};

export default RatingViewer;
