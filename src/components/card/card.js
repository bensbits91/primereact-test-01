import React from 'react';
import { Button } from 'primereact/button';
import { HorizontalCard, MainCard, VerticalCard } from './style';
import { ImageViewer, RatingViewer, StatusViewer, TypeViewer } from '../viewers';
import getDataByThingType from '../../utils/get-data-by-thing-type';

const ThingCard = ({ item, size = 'large', btnCb }) => {
    const { author, country, date, genres, language, thingDescription, thingName } =
        getDataByThingType(item);
    console.log('bb ~ item:', item);
    console.log('bb ~ country:', country);
    console.log('bb ~ language:', language);
    console.log('bb ~ genres:', genres);
    let imgWidth;
    switch (size) {
        case 'small':
            imgWidth = '60';
            break;
        case 'medium':
            imgWidth = '120';
            break;
        default:
            imgWidth = '200';
    }

    return (
        <MainCard size={size}>
            <ImageViewer item={item} imgWidth={imgWidth} />
            <VerticalCard title={thingName} subTitle={author}>
                <HorizontalCard>
                    <TypeViewer item={item} />
                    <StatusViewer item={item} />
                    <RatingViewer item={item} />
                </HorizontalCard>
                <HorizontalCard>
                    {date && <p>{date}</p>}
                    {genres && <p>{genres}</p>}
                    {country && <p>{country}</p>}
                    {language && <p>{language}</p>}
                </HorizontalCard>
                <p>{thingDescription}</p>
                {btnCb && (
                    <Button
                        icon='pi pi-plus'
                        className='p-button-rounded p-button-outlined'
                        onClick={btnCb}>
                        Add External Data
                    </Button>
                )}
            </VerticalCard>
        </MainCard>
    );
};

export default ThingCard;
