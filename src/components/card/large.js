import React from 'react';
import { Card } from 'primereact/card';
import { ImageViewer, RatingViewer, StatusViewer, TypeViewer } from '../viewers';
import getDataByThingType from '../../utils/get-data-by-thing-type';

const LargeCard = ({ item }) => {
    const { name /* , type, status, rating */ } = item || {};
    const { thingDescription } = getDataByThingType(item);

    return (
        <Card>
            <ImageViewer item={item} imgWidth='200' />
            <Card title={name}>
                <TypeViewer item={item} />
                <RatingViewer item={item} />
                <StatusViewer item={item} />
                <p>{thingDescription}</p>
            </Card>
        </Card>
    );
};

export default LargeCard;
