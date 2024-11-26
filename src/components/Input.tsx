import React, { FormEvent, ReactElement } from 'react';

type TextInputProps = {
    className?: string;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    placeholder?: string;
    role: string
    value: string;
};

function TextInput(props: TextInputProps): ReactElement {
    return (
        <>
            <input
                aria-label="Search missions by name"
                className={props.className}
                name="search"
                onChange={e => props.onChange(e)}
                placeholder={props.placeholder || 'Search...'}
                tabIndex={2}
                type="text"
                value={props.value}
            />
        </>
    );
}

export default TextInput;
