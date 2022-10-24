import React from 'react';

import { ValueType } from '../../../types';
import { ModalSubItem } from '../../../types/services/modal.types';
import Input from '../../Atoms/Form/Input';

interface ContentSubItemProps {
  item: ModalSubItem;
  handleChange: (_e: ValueType) => void;
}
export default function ContentSubItem(props: ContentSubItemProps) {
  return (
    <div className="content-sub-item2 mb-3 d-flex border justify-content-between">
      <Input
        name="name"
        handleChange={props.handleChange}
        placeholder={props.item.name}
      />
      {/* <p className="subitem-name mb-0 mt-0">{props.item.name}</p> */}

      {props.item.icon ? (
        <div className="subitem-icon">
          <img src={'/icons/arrow-down-dark.svg'} width={20} alt="arrow-down" />
        </div>
      ) : null}
    </div>
  );
}
