import React, { ReactNode } from 'react';

type IndicatorProps = {
  isCircular: boolean;
  className?: string;
  isActive?: boolean;
  handleClick: () => void;
  children: ReactNode;
};

const Indicator = ({
  isCircular,
  className = '',
  isActive,
  children,
  handleClick,
}: IndicatorProps) => {
  return (
    <button
      onClick={handleClick}
      className={`btn btn-sm h-auto ${
        isActive ? 'bg-purple text-white' : 'bg-light-gray'
      } ${isCircular ? 'rounded-circle' : ''} ${className}`}>
      {children}
    </button>
  );
};

export default Indicator;
