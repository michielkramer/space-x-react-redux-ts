import React, {ReactElement, useContext} from 'react';
import AppContext from '../context';
import {ListItem} from './List';

type ListItemProps = {
    searchTerm: string;
};

function ListItems(props: ListItemProps): ReactElement {
    const [context,] = useContext(AppContext);
    return (
        <ul className='mission-list'>
            {context.missions
                .filter((item: ListItem) => item.name.toLowerCase().startsWith(props.searchTerm?.toLocaleLowerCase()))
                .map((item: ListItem) => (
                    <li className="mission-list-item" key={item.id}>
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
