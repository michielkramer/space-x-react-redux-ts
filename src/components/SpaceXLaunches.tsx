import React, { useContext, useEffect, useState } from 'react';
import useSpaceXLaunches from '../hooks/useSpaceXLaunches';
import List, { ListItem } from './List';
import Loader from './Loader';
import AppContext from '../context';

function SpaceXLaunches() {
    const launches = useSpaceXLaunches();
    const [context, setContext] = useContext(AppContext);

    return context.isLoading === true ? <Loader /> : (
        <List {...launches} />
    );
}

export default SpaceXLaunches;