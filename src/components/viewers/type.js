import React from 'react';
import getDataByThingType from '../../utils/get-data-by-thing-type';

const TypeViewer = ({ item }) => {
    const { iconCode, type } = getDataByThingType(item);
    const typeStyle = type ? ` type-${type.toLowerCase()}` : '';
    // todo: replace temp style
    return (
        <span className={`type-badge${typeStyle}`}>
            <i className={`pi ${iconCode}`} style={{marginRight: 8}}></i>
            {type}
        </span>
    );
};

export default TypeViewer;
