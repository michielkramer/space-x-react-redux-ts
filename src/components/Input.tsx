import React, { FormEvent, ReactNode} from 'react';

type TextInputProps = {
    onChange: (event: FormEvent<HTMLInputElement>) => void;
    value: string;
};

function TextInput(props: TextInputProps): ReactNode {
    return <input onChange={e => props.onChange(e)} type="text" value={props.value}/>;
}

export default TextInput;
