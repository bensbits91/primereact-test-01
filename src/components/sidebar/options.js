import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DataView } from 'primereact/dataview';
import { ThingCard } from '../card';
import { updateItemAction } from '../../redux/actions/action-dispatchers';

const SidebarOptions = ({ dataOptions }) => {
    const dispatch = useDispatch();
    const sidebarData = useSelector((state) => state.sidebarData);

    const itemTemplate = (data, layout) => {
        const tempThing = { ...sidebarData, externalData: { data } };

        const handleAddExternalData = () => {
            dispatch(updateItemAction(tempThing));
        };

        return <ThingCard item={tempThing} size='medium' btnCb={handleAddExternalData} />;
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
