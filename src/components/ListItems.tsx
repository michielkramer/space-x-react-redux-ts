import React, { ReactElement } from 'react';
import { ListItem } from './List';

type ListItemProps = {
    items: ListItem[];
    searchTerm: string;
};

function ListItems(props: ListItemProps): ReactElement {
    return (
        <ul className='mission-list'>
            {Object.entries(props.items)
                .filter(([, item]) => item.name.toLowerCase().startsWith(props.searchTerm?.toLocaleLowerCase()))
                .map(([key, item]) => (
                    <li className="mission-list-item" key={key}>
                        <ul>
                            <li><img src={item.url}/></li>
                            <li className="mission-name">{item.name}</li>
                            <li className="mission-year">{new Date(item.date).getFullYear().toString()}</li>
                            <li className="mission-status">{item.status}</li>
                            <li className="star"></li>
                        </ul>
                    </li>
                ))}
        </ul>
    );
}

export default ListItems;
