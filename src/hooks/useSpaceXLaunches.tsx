import { useState, useEffect, useContext } from 'react';
import config from '../../config';
import { SpaceXLaunch } from '../model/SpaceX';
import { ListItem } from '../components/List';
import AppContext from '../context';

function useSpaceXLaunches() {
    const [launches, setLaunches] = useState<ListItem[]>([]);
    const [context, setContext] = useContext(AppContext);

    const url = `https://${config.spaceX.domain}/${config.spaceX.services.version}/${config.spaceX.services.launches}`;

    async function getLaunches(): Promise<ReadableStream | string> {
        try {
            const stream = await fetch(url);
            const jsonData = await stream.text();
            if (jsonData) {
                const launches = JSON.parse(jsonData);
                launches.map((launch: SpaceXLaunch) => {
                    const item: ListItem = {
                        id: launch.id,
                        name: launch.name,
                        url: launch.links.patch.small,
                        date: launch.date_utc
                    };
                    setLaunches((prev: ListItem[]) => [...prev, item]);
                });
                setContext({ isLoading: false });
            }
        } catch (error) {
            return 'Error retrieving SpaceX Data';
        }
    }

    useEffect(() => {
        getLaunches();
    }, []);

    return launches;
}

export default useSpaceXLaunches;
