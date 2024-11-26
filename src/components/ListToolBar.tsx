import React, {FormEvent, ReactElement} from 'react';
import TextInput from './Input';

type ListToolBarProps = {
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    placeholder?: string;
    role: string;
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
                        onClick={() => {}}
                        tabIndex={0}
                    >
                        Favourites
                    </button>
                    <button
                        aria-label="Show all missions"
                        onClick={() => {}}
                        tabIndex={1}
                    >
                        All missions
                    </button>
                </span>
            <TextInput
                className="mission-search"
                onChange={props.onChange}
                placeholder={props.placeholder || 'Search...'}
                role="search"
                value={props.value}
            />
        </div>
    );
}

export default ListToolBar;
