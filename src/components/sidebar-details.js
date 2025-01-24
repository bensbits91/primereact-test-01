import React from 'react';

const SidebarDetails = ({ thing }) => {
    const { name, type, externalData } = thing;
    const { data } = externalData;
    const { overview, poster_path } = data;
    let posterPath = '';
    switch (type) {
        case 'Book':
            posterPath = data.volumeInfo.imageLinks.thumbnail; // todo: this was auto-suggested -- is it correct?
            break;
        case 'Movie':
        case 'TV':
            posterPath = `https://image.tmdb.org/t/p/w92${poster_path}`;
            break;
        default:
            console.log('unknown type');
    }
    // const posterPath = `https://image.tmdb.org/t/p/w92${poster_path}`;

    // todo: add more details

    return (
        <div>
            <img src={posterPath} alt={name} />
            <p>{overview}</p>
        </div>
    );
};

export default SidebarDetails;
