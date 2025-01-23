import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsSidebarVisible } from '../redux/actions/action-creators'; // todo: should this have a thunk in action-dispatchers.js?
import { getTmdbDataAction } from '../redux/actions/action-dispatchers';
import { Sidebar as PrimeSideBar } from 'primereact/sidebar';
import SidebarOptions from './sidebar-options';
import SidebarDetails from './sidebar-details';

const Sidebar = () => {
    const dispatch = useDispatch();
    const isSidebarVisible = useSelector((state) => state.isSidebarVisible);
    const sidebarData = useSelector((state) => state.sidebarData);
    const sidebarDataOptions = useSelector((state) => state.sidebarDataOptions);

    const { name, externalData } = sidebarData || {};

    useEffect(() => {
        if (
            isSidebarVisible &&
            !externalData &&
            !sidebarDataOptions
        ) {
            dispatch(getTmdbDataAction(name));
        }
    }, [isSidebarVisible, sidebarData, sidebarDataOptions]);

    const handleHide = () => {
        dispatch(setIsSidebarVisible(false, null));
    };

    return (
        <div className='card flex justify-content-center'>
            {((sidebarData && sidebarData.externalData) || sidebarDataOptions) && (
                <PrimeSideBar
                    visible={isSidebarVisible}
                    position='right'
                    // className='w-full md:w-20rem lg:w-50rem'
                    onHide={handleHide}>
                    {name && <h2>{name}</h2>}
                    <div>
                        {sidebarData && !sidebarData.externalData && sidebarDataOptions && (
                            <SidebarOptions dataOptions={sidebarDataOptions} />
                        )}
                        {sidebarData && sidebarData.externalData && (
                            <SidebarDetails thing={sidebarData} />
                        )}
                    </div>
                </PrimeSideBar>
            )}
        </div>
    );
};

export default Sidebar;
