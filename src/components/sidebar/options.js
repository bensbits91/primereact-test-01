import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { ImageViewer } from '../viewers';
import { updateItemAction } from '../../redux/actions/action-dispatchers';
import getDataByThingType from '../../utils/get-data-by-thing-type';

const SidebarOptions = ({ dataOptions }) => {
    const dispatch = useDispatch();
    const sidebarData = useSelector((state) => state.sidebarData);

    const itemTemplate = (data, layout) => {
        const handleAddExternalData = (data) => {
            const newSidebarData = { ...sidebarData, externalData: { data } };
            dispatch(updateItemAction(newSidebarData));
        };

        const tempThing = { ...sidebarData, externalData: { data } };

        const { thingName } = getDataByThingType(tempThing);

        return (
            <div className='p-col-12'>
                <div className='product-list-item'>
                    <ImageViewer item={tempThing} imgWidth='200' />
                    <div className='product-list-detail'>
                        <h5 className='p-mb-2'>{thingName}</h5>
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
