import React, {useContext, useEffect, useState} from 'react';
import List, { ListItem } from '../components/List';
import AppContext, { AppContextType } from '../context';
import Loader from '../components/Loader';
import Header from '../components/Header';
import useSpaceXLaunches from '../hooks/useSpaceXLaunches';

function SpaceXLaunches() {
    const [context, setContext] = useContext(AppContext);
    const [missions, setMissions] = useState<ListItem[]>([]);

    useSpaceXLaunches().then((result) => setMissions(result));

    useEffect(() => {
        setContext((prev: AppContextType) => ({ ...prev, missions }));
    }, [missions]);

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