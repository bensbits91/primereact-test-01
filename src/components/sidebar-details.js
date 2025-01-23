import React from 'react';

const SidebarDetails = ({ thing }) => {
    const { name, externalData } = thing;
    const { data } = externalData;
    const { overview, poster_path } = data;
    const posterPath = `https://image.tmdb.org/t/p/w92${poster_path}`;

    return (
        <div>
            <img src={posterPath} alt={name} />
            <p>{overview}</p>
        </div>
    );
};

export default SidebarDetails;
