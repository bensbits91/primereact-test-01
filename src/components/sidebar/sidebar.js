import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setIsSidebarVisible } from '../../redux/actions/action-creators'; // todo: should this have a thunk in action-dispatchers.js?
import {
    getTmdbDataAction,
    getGoogleBooksDataAction,
    getGiantBombDataAction
} from '../../redux/actions/action-dispatchers';
import { Sidebar as PrimeSideBar } from 'primereact/sidebar';
import SidebarOptions from './options';
import { LargeCard } from '../card';

const Sidebar = () => {
    const dispatch = useDispatch();
    const isSidebarVisible = useSelector((state) => state.isSidebarVisible);
    const sidebarData = useSelector((state) => state.sidebarData); // todo: rename to selectedThing
    const sidebarDataOptions = useSelector((state) => state.sidebarDataOptions); // todo: rename to thingSearchResults

    const { name, type, externalData } = sidebarData || {};

    useEffect(() => {
        if (isSidebarVisible && !externalData && !sidebarDataOptions) {
            switch (type) {
                case 'Book':
                    dispatch(getGoogleBooksDataAction(name));
                    break;
                case 'Movie':
                case 'TV':
                    dispatch(getTmdbDataAction(name, type));
                    break;
                case 'Video Game':
                    dispatch(getGiantBombDataAction(name));
                    break;
                default:
                    console.log('unknown type');
            }
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
                    onHide={handleHide}
                    position='right'
                    // className='w-full md:w-20rem lg:w-50rem'
                    style={{ // todo: replace this temp styles
                        height: 'auto',
                        left: 'unset',
                        maxHeight: '85vh',
                        right: '5vw',
                        width: '90vw'
                    }}
                    fullScreen>
                    <div>
                        {sidebarData &&
                            !sidebarData.externalData &&
                            sidebarDataOptions && (
                                <SidebarOptions dataOptions={sidebarDataOptions} />
                            )}
                        {sidebarData && sidebarData.externalData && (
                            <LargeCard item={sidebarData} />
                        )}
                    </div>
                </PrimeSideBar>
            )}
        </div>
    );
};

export default Sidebar;
