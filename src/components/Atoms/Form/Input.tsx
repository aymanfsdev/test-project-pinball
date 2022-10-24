import '../../../styles/components/Atoms/Form/Input.scss';

import React, { useEffect, useState } from 'react';

import { InputProps } from '../../../types/props';

export default function Input<T>({
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
      <div className="field">
        <input
          // id={placeholder}
          placeholder=" "
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
        <label htmlFor={placeholder} title={placeholder} data-title={placeholder}></label>
      </div>
    </>
  );
}
