import React, { FormEvent, ReactNode, useState } from 'react';
import TextInput from './Input';

export type ListItem = {
    [key: string]: any;
};

function List(items: ListItem[]): JSX.Element {
    const [inputMissionName, setInputMissionName] = useState<string>('');

    function handleTextInput(event: FormEvent<HTMLInputElement>): void {
        setInputMissionName(event.currentTarget?.value?.replace(/[^0-9a-z]/gi, ''));
    }

    return (
        <>
        <TextInput onChange={handleTextInput} value={inputMissionName} />
        <ul className='mission-list'>
            {Object.entries(items)
                .filter(([key, item]) => item.name.toLowerCase().startsWith(inputMissionName?.toLocaleLowerCase()))
                .map(([key, item]) => (
                    <li className="mission-list-item" key={key}>
                        <img src={item.url} />
                        <span>
                            <p className="mission-name">{item.name}</p>
                            <p className="mission-year">{new Date(item.date).getFullYear().toString()}</p>
                        </span>
                    </li>
            ))}
        </ul>
        </>
    );
}

export default List;
