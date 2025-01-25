import React from 'react';
import { RatingViewer, StatusViewer, TypeViewer } from '../viewers';
import { Image } from 'primereact/image';
import getDataByThingType from '../../utils/get-data-by-thing-type';

const SidebarDetails = ({ thing }) => {
    const { imgPath, thingName, thingDescription } = getDataByThingType(thing);

    return (
        <div>
            <Image src={imgPath} alt={`${thingName} image`} width='100' preview />
            <TypeViewer thing={thing} />
            <RatingViewer thing={thing} />
            <StatusViewer thing={thing} />
            <p>{thingDescription}</p>
        </div>
    );
};

export default SidebarDetails;
