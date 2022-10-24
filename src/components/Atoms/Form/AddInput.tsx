import '../../../styles/components/Atoms/Form/Input.scss';

import React, { useEffect, useState } from 'react';
import Icon from '../Icon'

import { InputProps } from '../../../types/props';

export default function AddInput<T>({
    placeholder = '',
    type,
    readonly = false,
    required = true,
    value = '',
    name,
    className = '',
    min = 0,
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
        <>
            <div
                className='d-flex align-items-center'
                style={{
                    border: '1px dashed #E7E7E7',
                    padding: '1px'
                }}
            >

                <Icon name="add-input" size={24} className='mx-2 icon-honver' />
                <input
                    disabled
                    placeholder="Add employee"
                    type={type}
                    required id={placeholder}
                    value={value}
                    autoComplete='off'
                    name={name}
                    spellCheck="true"
                    readOnly={readonly}
                    min={min}
                    max={max}
                    style={{ color: inputColor }}
                    className={`${bgStyles ? 'bg-styles' : ''} ${className}`}
                    /* @ts-ignore */
                    onChange={handleOnChange}
                    {...props}
                />

            </div>
        </>
    );
}
