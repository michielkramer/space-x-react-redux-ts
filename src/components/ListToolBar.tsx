import React, {FormEvent, ReactElement} from 'react';
import TextInput from './Input';

type ListToolBarProps = {
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value: string;
};

function ListToolBar(props: ListToolBarProps): ReactElement {
    return (
        <div className="mission-list-toolbar">
                <span className="list-toggle">
                    <button
                        aria-label="Show all missions"
                        tabIndex={0}
                    >
                        All missions
                    </button>
                    <button
                        aria-label="Show favourite missions"
                        tabIndex={1}
                    >
                        Favourites
                    </button>
                </span>
            <TextInput
                aria-only="Search"
                className="mission-search"
                onChange={props.onChange}
                placeholder={props.placeholder || 'Search...'}
                value={props.value}
            />
        </div>
    );
}

export default ListToolBar;
