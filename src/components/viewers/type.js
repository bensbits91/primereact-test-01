import React from 'react';

const TypeViewer = (item) => {
    let type = item && item.type ? item.type : '';
    // todo: this is a hack, need to fix this
    if (item.thing) {
        type = item.thing.type;
    }

    let iconCode = '';
    switch (type) {
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
        <span className={`type-badge type-${type.toLowerCase()}`}>
            <i className={`pi ${iconCode}`}></i>
            {type}
        </span>
    );
};

export default TypeViewer;
