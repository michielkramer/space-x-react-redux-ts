import React, { ReactElement, useContext } from 'react';
import useSpaceXLaunches from '../hooks/useSpaceXLaunches';
import List from '../components/List';
import AppContext from '../context';
import Loader from '../components/Loader';
import Header from '../components/Header';

function SpaceXLaunches(): ReactElement {
    useSpaceXLaunches();
    const [context,] = useContext(AppContext);

    return (
        <>
            <Header />
            {context.isLoading === true
                ? <Loader />
                : <List {...context.missions} />}
        </>
    );
}

export default SpaceXLaunches;