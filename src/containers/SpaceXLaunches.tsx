import React from 'react';
import List from '../components/List';
import Header from '../components/Header';
import useSpaceXLaunches from '../hooks/useSpaceXLaunches';
import { useAppDispatch } from '../utils/redux';
import { getApiData } from '../actions/apiDataActions';

function SpaceXLaunches() {
    const dispatch = useAppDispatch();
    useSpaceXLaunches().then((result) => dispatch(getApiData(result)));

    return (
        <>
            <Header />
            <List />
        </>
    );
}

export default SpaceXLaunches;