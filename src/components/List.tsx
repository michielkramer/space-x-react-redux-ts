import React, { FormEvent, ReactElement, useState } from 'react';
import ListItems from './ListItems';
import ListToolBar from './ListToolBar';

export type ListItem = {
    [key: string]: any;
};

function List(): ReactElement {
    const [inputMissionName, setInputMissionName] = useState<string>('');
    const [showFavourites, setShowFavourites] = useState<boolean>(false);

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
                role={showFavourites === true ? 'List favourites missions' : 'List of missions'}
                searchTerm={inputMissionName}
                showFavourites={showFavourites}
                title={showFavourites === true ? 'Favourites' : 'All missions'}
            />
        </div>
    );
}

export default List;
