import React from 'react';

import Icon from '../../Atoms/Icon';
interface ICollapsibleProps {
  title: React.ReactNode;
  isOpen?: boolean;
  children: React.ReactNode;
  addBorder?: boolean;
  showIcon?: boolean;
}

export default function Collapsible({
  title,
  isOpen = false,
  children,
  addBorder = true,
  showIcon = true,
}: ICollapsibleProps) {
  const [open, setOpen] = React.useState(isOpen);

  const toogleOpen = () => {
    setOpen(!open);
  };
  return (
    <div>
      <div className="content-item mb-4">
        {/* eslint-disable-next-line */}
        <h6
          className="item-name cursor-pointer d-flex align-items-center"
          onClick={toogleOpen}>
          {title}
          {showIcon && (
            <button className="btn w-auto" onClick={toogleOpen}>
              <Icon name={open ? 'arrow-up-black' : 'arrow-down-dark'} size={20} />
            </button>
          )}
        </h6>
        {open ? (
          <div className={`${addBorder ? 'col-12 border p-2' : ''}`}>{children}</div>
        ) : null}
      </div>
    </div>
  );
}
