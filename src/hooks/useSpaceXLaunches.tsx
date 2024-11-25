import { useState, useEffect, useContext } from 'react';
import appConfig from '../../appConfig';
import { ListItem } from '../components/List';
import AppContext from '../context';

function useSpaceXLaunches() {
    const [missions, setMissions] = useState<ListItem[]>([]);
    const [, setContext] = useContext(AppContext);
    const url = `https://${appConfig.spaceX.domain}/${appConfig.spaceX.services.version}/${appConfig.spaceX.services.launches}`;

    async function getLaunches(): Promise<ReadableStream | null> {
        try {
            const stream: Response = await fetch(url);
            const streamData = await stream.json();
            for await (const chunk of streamData) {
                const item: ListItem = {
                    id: chunk.id,
                    isFav: false,
                    date: chunk.date_utc,
                    name: chunk.name,
                    status: chunk.success,
                    url: chunk.links.patch.small
                };
                setMissions((prevMissions: ListItem[]) => [...prevMissions, item]);
            }
        } catch (error: Error | unknown) {
            console.log({message: 'Error retrieving SpaceX Data', error });
            return null
        }
    }

    useEffect(() => {
        getLaunches();
    }, []);

    setContext({ missions });
}

export default useSpaceXLaunches;
