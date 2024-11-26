import React, { ReactElement, SyntheticEvent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library, findIconDefinition } from '@fortawesome/fontawesome-svg-core';
import { ListItem } from './List';
import { fas, IconDefinition } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

type ListItemProps = {
    items: ListItem[];
    role: string;
    searchTerm: string;
    title: string;
};

function ListItems(props: ListItemProps): ReactElement {
    const starIconSolid: IconDefinition = findIconDefinition({ prefix: 'fas', iconName: 'star' });

    function handleClick(event: SyntheticEvent): void {
        event.preventDefault();
        console.log('CLICKED');
    }

    return (
        <>
            <h2>{props.title}</h2>
            <ul
                aria-label="The list of all missions"
                className="mission-list"
            >
                {props.items
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
                                    {item.isFav
                                        ? (
                                            <span
                                                className="fav-icon"
                                                onClick={(event) => handleClick(event)}
                                            >
                                        <FontAwesomeIcon icon={starIconSolid}/>
                                    </span>
                                        ) : (
                                            <span
                                                className="add-fav"
                                                onClick={(event) => handleClick(event)}
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
