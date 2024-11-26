import React, { Dispatch, FormEvent, ReactElement, SetStateAction } from 'react';
import TextInput from './Input';

type ListToolBarProps = {
    handleSearch: (event: FormEvent<HTMLInputElement>) => void;
    placeholder?: string;
    role: string;
    setShowFavourites: Dispatch<SetStateAction<boolean>>;
    value: string;
};

function ListToolBar(props: ListToolBarProps): ReactElement {
    return (
        <div
            aria-level={2}
            className="mission-list-toolbar"
        >
                <span className="list-toggle">
                    <button
                        aria-label="Show favourite missions"
                        onClick={() => props.setShowFavourites(true)}
                        tabIndex={0}
                    >
                        Favourites
                    </button>
                    <button
                        aria-label="Show all missions"
                        onClick={() => props.setShowFavourites(false)}
                        tabIndex={1}
                    >
                        All missions
                    </button>
                </span>
            <TextInput
                className="mission-search"
                onChange={props.handleSearch}
                placeholder={props.placeholder || 'Search...'}
                role="search"
                value={props.value}
            />
        </div>
    );
}

export default ListToolBar;
