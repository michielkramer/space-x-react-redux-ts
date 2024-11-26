import React, { useContext } from 'react';
import List from '../components/List';
import AppContext, { AppContextType } from '../context';
import Loader from '../components/Loader';
import Header from '../components/Header';
import useSpaceXLaunches from '../hooks/useSpaceXLaunches';

function SpaceXLaunches() {
    const [context, setContext] = useContext(AppContext);

    useSpaceXLaunches().then((result) => {
        setContext((prev: AppContextType) => ({ ...prev, init: false, missions: result }));
    });

    return (
        <>
            <Header />
            {context.isLoading === true
                ? <Loader />
                : <List />}
        </>
    );
}

export default SpaceXLaunches;