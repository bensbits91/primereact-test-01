import React from 'react';
import { RatingViewer, StatusViewer, TypeViewer } from '../viewers';

const SidebarDetails = ({ thing }) => {
    const { type, externalData } = thing;
    const { data } = externalData;

    let imgPath = '';
    let thingName = '';
    let thingDescription = '';

    switch (type) {
        // todo: should I desctructure data in each case?
        case 'Book':
            imgPath = data.volumeInfo.imageLinks.thumbnail;
            thingName = data.volumeInfo.title;
            thingDescription = data.volumeInfo.description;
            break;
        case 'Movie':
        case 'TV':
            imgPath = `https://image.tmdb.org/t/p/w92${data.poster_path}`;
            thingName = data.title;
            thingDescription = data.overview;
            break;
        case 'Video Game':
            imgPath = data.image.thumb_url;
            thingName = data.name;
            thingDescription = data.description || data.deck;
            break;
        default:
            console.log('unknown type');
    }
    console.log('bb ~ file: details.js:5 ~ SidebarDetails ~ thing:', thing);

    return (
        <div>
            <img src={imgPath} alt={thingName} />
            <TypeViewer thing={thing} />
            <RatingViewer thing={thing} />
            <StatusViewer thing={thing} />
            <p>{thingDescription}</p>
        </div>
    );
};

export default SidebarDetails;
