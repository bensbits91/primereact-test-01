import React from 'react';
import { Image } from 'primereact/image';
import getDataByThingType from '../../utils/get-data-by-thing-type';

const ImageViewer = ({ item, imgWidth = '200' }) => {
    const { imgPath, iconCode } = getDataByThingType(item);
    if (imgPath) {
        return (
            <Image src={imgPath} alt={`${item.name} image`} width={imgWidth} preview />
        );
    }
    return (
        <i
            className={`pi ${iconCode}`}
            style={{ fontSize: '3.3rem', padding: '20px 4px 16px' }}></i> // todo: replace these temp styles
    );
};

export default ImageViewer;
