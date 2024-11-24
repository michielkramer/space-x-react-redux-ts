import React, {FormEvent, ReactElement, useState} from 'react';
import ListItems from './ListItems';
import ListToolBar from './ListToolBar';

export type ListItem = {
    [key: string]: any;
};

function List(items: ListItem[]): ReactElement {
    const [inputMissionName, setInputMissionName] = useState<string>('');

    function handleTextInput(event: FormEvent<HTMLInputElement>): void {
        setInputMissionName(event.currentTarget?.value?.replace(/[^0-9a-z]/gi, ''));
    }

    return (
        <>
            <ListToolBar
                onChange={handleTextInput}
                value={inputMissionName}
            />
            <ListItems
                items={items}
                searchTerm={inputMissionName}
            />
        </>
    );
}

export default List;
