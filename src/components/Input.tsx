import React, { FormEvent, ReactElement } from 'react';

type TextInputProps = {
    className?: string;
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    placeholder?: string;
    value: string;
};

function TextInput(props: TextInputProps): ReactElement {
    return <input
        className={props.className}
        onChange={e => props.onChange(e)}
        placeholder={props.placeholder || 'Search...'}
        tabIndex={2}
        type="text"
        value={props.value}
    />;
}

export default TextInput;
