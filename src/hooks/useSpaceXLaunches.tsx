import { useState, useEffect, useContext } from 'react';
import appConfig from '../../appConfig';
import { SpaceXLaunch } from '../model/SpaceX';
import { ListItem } from '../components/List';
import AppContext from '../context';

function useSpaceXLaunches() {
    const [launches, setLaunches] = useState<ListItem[]>([]);
    const [, setContext] = useContext(AppContext);

    const url = `https://${appConfig.spaceX.domain}/${appConfig.spaceX.services.version}/${appConfig.spaceX.services.launches}`;

    async function getLaunches(): Promise<ReadableStream | null> {
        try {
            const stream: Response = await fetch(url);
            const jsonData: string = await stream.text();
            if (jsonData) {
                const launches: ListItem[] = JSON.parse(jsonData);
                launches.map((launch: SpaceXLaunch) => {
                    const item: ListItem = {
                        id: launch.id,
                        name: launch.name,
                        url: launch.links.patch.small,
                        date: launch.date_utc,
                        status: launch.success
                    };
                    setLaunches((prev: ListItem[]) => [...prev, item]);
                });
                setContext({ isLoading: false });
            }
        } catch (error: Error | unknown) {
            console.log({message: 'Error retrieving SpaceX Data', error });
            return null
        }
    }

    useEffect(() => {
        getLaunches();
    }, []);

    return launches;
}

export default useSpaceXLaunches;
