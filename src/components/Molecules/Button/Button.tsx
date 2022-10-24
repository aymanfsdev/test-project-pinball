import '../../../styles/components/Molecules/Button/Button.scss';

import React from 'react';

import { ButtonProps } from '../../../types/props';
import Icon from '../../Atoms/Icon';

export default function Button<T>({
  children,
  disabled,
  className = '',
  icon,
  onClick,
}: ButtonProps<T>) {
  return (
    <button disabled={disabled} className={className} onClick={onClick}>
      {icon && <Icon name={icon} />}
      {children}
    </button>
  );
}
