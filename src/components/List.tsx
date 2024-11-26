import React, { FormEvent, ReactElement, useContext, useState } from 'react';
import ListItems from './ListItems';
import ListToolBar from './ListToolBar';
import AppContext from '../context';

export type ListItem = {
    [key: string]: any;
};

function List(): ReactElement {
    const [inputMissionName, setInputMissionName] = useState<string>('');
    const [context,] = useContext(AppContext);

    function handleTextInput(event: FormEvent<HTMLInputElement>): void {
        setInputMissionName(event.currentTarget?.value?.replace(/[^0-9a-z]/gi, ''));
    }

    return (
        <div className="app-container">
            <ListToolBar
                onChange={handleTextInput}
                role="toolbar"
                value={inputMissionName}
            />
            <ListItems
                items={context.missions}
                role={context.isShowingFavourites === true ? 'List favourites missions' : 'List of missions'}
                searchTerm={inputMissionName}
                title={context.isShowingFavourites === true ? 'Favourites' : 'All missions'}
            />
        </div>
    );
}

export default List;
