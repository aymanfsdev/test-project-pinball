import '../../../styles/components/Atoms/Form/Input.scss';

import React, { useEffect, useState } from 'react';

import { InputProps } from '../../../types/props';

export default function InputNormal<T>({
    placeholder = '',
    type,
    readonly = false,
    required = true,
    value = '',
    name,
    className = '',
    min,
    max,
    inputColor = '#212529',
    bgStyles = true,
    handleChange = () => { },
    ...props
}: // ...attrs
    InputProps<T>) {
    const [_value, setValue] = useState<string>('');

    useEffect(() => setValue(value?.toString()), [value]);

    function handleOnChange(e: any) {
        setValue(e.target.value);
        if (handleChange && _value !== e.target.value)
            handleChange({ name, value: e.target.value, event: e });
    }

    return (
        <input
            // {...attrs} 
            placeholder={placeholder}
            name={name}
            type={type}
            value={value}
            // spellCheck="true"
            readOnly={readonly}
            required={required}
            // min={min}
            // max={max}
            style={{ color: inputColor, backgroundColor: 'white' }}
            autoComplete="off"
            className={`${bgStyles ? 'bg-styles' : ''} ${className}`}
            /* @ts-ignore */
            onChange={handleOnChange}
            {...props}
        />

    );
}
