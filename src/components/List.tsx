import React, { FormEvent, ReactElement, useContext, useState } from 'react';
import ListItems from './ListItems';
import ListToolBar from './ListToolBar';
import AppContext from '../context';

export type ListItem = {
    [key: string]: any;
};

function List(): ReactElement {
    const [inputMissionName, setInputMissionName] = useState<string>('');
    const [favourites, setFavourites] = useState<string[]>([]);
    const [showFavourites, setShowFavourites] = useState<boolean>(false);
    const [context,] = useContext(AppContext);

    function handleSearch(event: FormEvent<HTMLInputElement>): void {
        setInputMissionName(event.currentTarget?.value?.replace(/[^0-9a-z]/gi, ''));
    }

    return (
        <div className="app-container">
            <ListToolBar
                handleSearch={handleSearch}
                role="toolbar"
                setShowFavourites={setShowFavourites}
                value={inputMissionName}
            />
            <ListItems
                favourites={favourites}
                items={context.missions}
                role={showFavourites === true ? 'List favourites missions' : 'List of missions'}
                searchTerm={inputMissionName}
                setFavourites={setFavourites}
                showFavourites={showFavourites}
                title={showFavourites === true ? 'Favourites' : 'All missions'}
            />
        </div>
    );
}

export default List;
