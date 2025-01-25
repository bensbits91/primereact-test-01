import React from 'react';
import { Tag } from 'primereact/tag';

const StatusViewer = (item) => {
    let status = item && item.status ? item.status : '';
    // todo: this is a hack, need to fix this
    if (item.thing) {
        status = item.thing.status;
    }

    let color = '';
    let iconCode = '';
    switch (status) {
        case 'Now':
            color = 'warning';
            iconCode = 'pi pi-play';
            break;
        case 'Past':
            color = 'success';
            iconCode = 'pi pi-check';
            break;
        case 'Future':
            color = 'info';
            iconCode = 'pi pi-calendar';
            break;
        case 'On Hold':
            color = 'info';
            iconCode = 'pi pi-pause';
            break;
        case 'Dropped':
            color = 'danger';
            iconCode = 'pi pi-times';
            break;
        default:
            color = 'secondary';
            iconCode = 'pi pi-question';
    }

    return <Tag value={status} severity={color} icon={iconCode} />;
};

export default StatusViewer;
