import React from 'react';

import { ContentSubHolderProps } from '../../../types/props';
import { ModalSubItem } from '../../../types/services/modal.types';
import ContentSubItem from '../../Molecules/Modal/ContentSubItem';

export default function ContentSubHolder(props: ContentSubHolderProps) {
  return (
    <div className="content-sub-holder border row m-0 p-3">
      {props.items.map((item: ModalSubItem) => (
        <div key={item.id} className=" col-xs-12 col-sm-12 col-md-3 col-lg-3 holder">
          <ContentSubItem item={item} key={item.id} handleChange={props.handleChange} />
        </div>
      ))}
    </div>
  );
}
