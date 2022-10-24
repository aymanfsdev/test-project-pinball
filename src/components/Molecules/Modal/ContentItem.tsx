import React, { useState } from 'react';

import { ContentItemProps } from '../../../types/props';
import Icon from '../../Atoms/Icon';
import ContentSubHolder from '../../Atoms/Modal/ContentSubHolder';

export default function ContentItem(props: ContentItemProps) {
  const [open, setOpen] = useState(false);

  const toogleOpen = () => {
    setOpen(!open);
  };
  return (
    <div className="content-item mb-4">
      <h6 className="item-name">
        {props.item.name}
        {props.item.subItems ? (
          <button className="btn w-auto" onClick={toogleOpen}>
            <Icon name={open ? 'arrow-up-black' : 'arrow-down-dark'} size={20} />
          </button>
        ) : null}
      </h6>

      {open ? (
        <div className="col-11">
          {props.item.subItems ? (
            <ContentSubHolder
              handleChange={props.handChange}
              items={props.item.subItems}
            />
          ) : null}
        </div>
      ) : null}
    </div>
  );
}
