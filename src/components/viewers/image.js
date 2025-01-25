import React from 'react';
import { Image } from 'primereact/image';
import getDataByThingType from '../../utils/get-data-by-thing-type';

const ImageViewer = (item, columnStuff, imgWidth) => {
    console.log('bb ~ file: image.js:6 ~ ImageViewer ~ item:', item);
    const finalImageWidth = imgWidth || item.imgWidth || '60'; // todo: better way to pass in imgWidth?
    const { imgPath, thingName, iconCode } = getDataByThingType(item);
    if (imgPath) {
        return (
            <Image
                src={imgPath}
                alt={`${thingName} image`}
                width={finalImageWidth}
                preview
            />
        );
    }
    return (
        <i
            className={`pi ${iconCode}`}
            style={{ fontSize: '3.3rem', padding: '20px 4px 16px' }}></i> // todo: replace these temp styles
    );
};

export default ImageViewer;
