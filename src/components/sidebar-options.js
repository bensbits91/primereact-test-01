import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { updateItemAction } from '../redux/actions/action-dispatchers';

const SidebarOptions = ({ dataOptions }) => {
    const dispatch = useDispatch();
    const sidebarData = useSelector((state) => state.sidebarData);

    const { type } = sidebarData || {};
    console.log('bb ~ file: sidebar-options.js:12 ~ SidebarOptions ~ type:', type);

    const itemTemplate = (data, layout) => {
        console.log('bb ~ itemTemplate ~ data:', data);
        let imgPath = '';
        let resultName = '';

        switch (type) {
            case 'Book':
                imgPath = data.volumeInfo.imageLinks.thumbnail;
                resultName = data.volumeInfo.title;
                break;
            case 'Movie':
            case 'TV':
                imgPath = `https://image.tmdb.org/t/p/w92${data.poster_path}`;
                resultName = data.title;
                break;
            default:
                console.log('unknown type');
        }

        const handleAddExternalData = (data) => {
            const newSidebarData = { ...sidebarData, externalData: { data } };
            dispatch(updateItemAction(newSidebarData));
        };

        return (
            <div className='p-col-12'>
                <div className='product-list-item'>
                    <img src={imgPath} alt={resultName} />
                    <div className='product-list-detail'>
                        <h5 className='p-mb-2'>{resultName}</h5>
                        {/* <span className='product-list-badge'>{thing.status}</span> */}
                        <h6 className='p-mt-0 p-mb-2'>{JSON.stringify(data)}</h6>
                    </div>
                    <div className='product-list-action'>
                        <Button
                            icon='pi pi-plus'
                            className='p-button-rounded p-button-outlined'
                            onClick={() => handleAddExternalData(data)}
                        />
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className='dataview-demo'>
            <div className='card'>
                <DataView
                    value={dataOptions}
                    layout='list'
                    itemTemplate={itemTemplate}
                    paginator
                    rows={5}
                />
            </div>
        </div>
    );
};

export default SidebarOptions;
