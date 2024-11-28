import React, { Dispatch, ReactElement, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ListItem } from './List';
import { fas, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../utils/redux';
import { updateApiData } from '../actions/apiDataActions';
import {setFavourites} from '../actions/appActions';
import { AnyAction } from 'redux';

library.add(fas);

type ListItemProps = {
    role: string;
    searchTerm: string;
    showFavourites: boolean;
    title: string;
};

function ListItems(props: ListItemProps): ReactElement {
    const starIconSolid: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'star' });
    const spaceXLaunches: ListItem[] = useAppSelector(state => state.apiData.spaceXLaunches);
    const favourites: string[] = useAppSelector(state => state.appData.favourites);
    const dispatch: Dispatch<AnyAction> = useAppDispatch();

    const [selected, setSelected] = useState<ListItem | null>(null);

    useEffect(() => {
        if (selected !== null) {
            const update = updateFavourites(selected);
            dispatch(updateApiData(update));
            setSelected(null);
        }
    }, [selected, favourites, spaceXLaunches]);

    function filterList(): ListItem[] {
        if (props.showFavourites) {
            return spaceXLaunches?.filter((item: ListItem) => favourites?.includes(item.id));
        }
        return spaceXLaunches;
    }

    function updateFavourites(item: ListItem): ListItem[] {
        const index = spaceXLaunches.indexOf(spaceXLaunches.find((a) => a.id === item.id));
        spaceXLaunches.splice(index, 1);
        spaceXLaunches.unshift({ ...item, isFav: true });
        return spaceXLaunches;
    }

    function handleClick(item: ListItem): void {
        if (!favourites?.includes(item.id)) {
            dispatch(setFavourites([...favourites, item.id]));
            setSelected(item);
        }
    }

    return (
        <>
            <h2>{props.title}</h2>
            <ul
                aria-label="The list of all missions"
                className="mission-list"
            >
                {filterList()
                    .filter((item: ListItem) => item.name.toLowerCase().startsWith(props.searchTerm?.toLocaleLowerCase()))
                    .map((item: ListItem) => (
                        <li
                            aria-label="Mission details"
                            className="mission-list-item"
                            key={item.id}
                        >
                            <ul>
                                <li>
                                    <img
                                        alt="The patch and or logo for the mission"
                                        src={item.url}
                                    />
                                </li>
                                <li
                                    aria-label={`Mission name: ${item.name}`}
                                    className="mission-name">
                                    {item.name}
                                </li>
                                <li
                                    aria-label={`Launch date: ${item.date}`}
                                    className="mission-year">
                                    {item.date}
                                </li>
                                <li
                                    aria-label={`Mission status: ${item.status}`}
                                    className="mission-status">
                                    {item.status}
                                </li>
                                {props.showFavourites === false && (
                                    <li>
                                        {item.isFav === true
                                            ? (
                                                <span
                                                    className="fav-icon"
                                                    onClick={() => handleClick(item)}
                                                >
                                        <FontAwesomeIcon icon={starIconSolid}/>
                                    </span>
                                            ) : (
                                                <span
                                                    className="add-fav"
                                                    onClick={() => handleClick(item)}
                                                >
                                        Add to favourites
                                    </span>
                                            )}
                                    </li>
                                )}
                            </ul>
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default ListItems;
