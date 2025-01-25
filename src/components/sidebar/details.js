import React from 'react';
import { ImageViewer, RatingViewer, StatusViewer, TypeViewer } from '../viewers';
import getDataByThingType from '../../utils/get-data-by-thing-type';

const SidebarDetails = ({ thing }) => {
    const { thingDescription } = getDataByThingType(thing);

    return (
        <div>
            <ImageViewer item={thing} imgWidth='200' />
            <TypeViewer item={thing} />
            <RatingViewer item={thing} />
            <StatusViewer item={thing} />
            <p>{thingDescription}</p>
        </div>
    );
};

export default SidebarDetails;
