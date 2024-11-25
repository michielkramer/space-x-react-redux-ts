import React, {ReactElement, useContext} from 'react';
import AppContext from '../context';
import { ListItem } from './List';

type ListItemProps = {
    searchTerm: string;
};

function ListItems(props: ListItemProps): ReactElement {
    const [context,] = useContext(AppContext);
    return (
        <ul
            aria-label="The list of all missions"
            className="mission-list"
        >
            {context.missions
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
                            <li
                                className="star">
                                <button></button>
                            </li>
                        </ul>
                    </li>
                ))}
        </ul>
    );
}

export default ListItems;
