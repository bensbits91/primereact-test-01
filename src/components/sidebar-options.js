import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { updateItemAction } from '../redux/actions/action-dispatchers';

const SidebarOptions = ({ dataOptions }) => {
    const dispatch = useDispatch();
    const sidebarData = useSelector((state) => state.sidebarData);

    const itemTemplate = (data, layout) => {
        const { poster_path } = data || {};
        const posterPath = `https://image.tmdb.org/t/p/w92${poster_path}`;

        const handleAddExternalData = (data) => {
            const newSidebarData = { ...sidebarData, externalData: { data } };
            dispatch(updateItemAction(newSidebarData));
        };

        return (
            <div className='p-col-12'>
                <div className='product-list-item'>
                    <img src={posterPath} alt={data.name} />
                    <div className='product-list-detail'>
                        <h5 className='p-mb-2'>{data.name}</h5>
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
                <DataView value={dataOptions} layout='grid' itemTemplate={itemTemplate} />
            </div>
        </div>
    );
};

export default SidebarOptions;
