import React from 'react';

type FontSize = 'xs' | 'sm' | 'md' | 'base' | 'lg' | 'xl' | 'xxl';
type FontWeight = 'light' | 'regular' | 'medium' | 'semiBold' | 'bold' | 'black';

interface IProps {
  children: React.ReactNode;
  fontSize?: FontSize;
  fontWeight?: FontWeight;
  color?: string;
  className?: string;
}

export default function Heading({
  fontSize = 'base',
  fontWeight = 'regular',
  color = 'black',
  className,
  children,
}: IProps) {
  return (
    <h2 className={`text-${fontSize} font-${fontWeight} ${className}`} style={{ color }}>
      {children}
    </h2>
  );
}
