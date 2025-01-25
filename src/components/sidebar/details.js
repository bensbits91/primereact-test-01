import React from 'react';
import { ImageViewer, RatingViewer, StatusViewer, TypeViewer } from '../viewers';
import getDataByThingType from '../../utils/get-data-by-thing-type';

const SidebarDetails = ({ thing }) => {
    const { thingDescription } = getDataByThingType(thing);

    return (
        <div>
            <ImageViewer thing={thing} imgWidth='200' />
            <TypeViewer thing={thing} />
            <RatingViewer thing={thing} />
            <StatusViewer thing={thing} />
            <p>{thingDescription}</p>
        </div>
    );
};

export default SidebarDetails;
