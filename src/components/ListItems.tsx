import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ListItem } from './List';
import { fas, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import {useAppDispatch, useAppSelector} from '../utils/redux';
import {updateApiData} from '../actions/apiDataActions';

library.add(fas);

type ListItemProps = {
    favourites: string[];
    role: string;
    searchTerm: string;
    setFavourites: Dispatch<SetStateAction<string[]>>;
    showFavourites: boolean;
    title: string;
};

function ListItems(props: ListItemProps): ReactElement {
    const starIconSolid: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'star' });
    const { spaceXLaunches } = useAppSelector(state => state.apiData);
    const dispatch = useAppDispatch();

    function filterList(): ListItem[] {
        if (props.showFavourites) {
            return spaceXLaunches?.filter((item: ListItem) => props.favourites.includes(item.id));
        }
        return spaceXLaunches;
    }

    function handleClick(item: ListItem): void {
        if (!props.favourites.includes(item.id)) {
            props.setFavourites((prev: string[]) => [...prev, item.id]);
            dispatch(updateApiData(item.id));
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
                            </ul>
                        </li>
                    ))}
            </ul>
        </>
    );
}

export default ListItems;
