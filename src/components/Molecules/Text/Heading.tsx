import '../../../styles/components/Molecules/Text/Heading.scss';

import React from 'react';

import { HeadingProps } from '../../../types/props';

export default function Heading(props: HeadingProps) {
  return (
    <h4 className={` ${props.className} text-${props.color} font-weight-${props.weight}`}>
      {props.text}
    </h4>
  );
}
