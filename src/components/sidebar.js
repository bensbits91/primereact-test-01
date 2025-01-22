import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Sidebar as PrimeSideBar } from 'primereact/sidebar';
import { setIsPanelVisible } from '../redux/actions/actions';

const Sidebar = () => {
    const isPanelVisible = useSelector((state) => state.isPanelVisible);
    const dispatch = useDispatch();

    const handleHide = () => {
        dispatch(setIsPanelVisible(false));
    };

    return (
        <div className='card flex justify-content-center'>
            <PrimeSideBar
                visible={isPanelVisible}
                onHide={handleHide}
                className='w-full md:w-20rem lg:w-30rem'>
                <h2>Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat.
                </p>
            </PrimeSideBar>
        </div>
    );
};

export default Sidebar;
