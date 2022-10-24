import { FormEvent } from 'react';

export interface ValueType<T = Event> {
  name: string;
  value: string | number | boolean | string[];
  label?: string;
  event?: FormEvent<T>;
}

export interface SelectData {
  value: string | number;
  label: string;
  subLabel?: string;
}

export type Color =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'main'
  | 'error'
  | 'warning'
  | 'success'
  | 'txt-primary'
  | 'txt-secondary'
  | 'none'
  | 'gray'
  | 'info'
  | 'lightgray';
