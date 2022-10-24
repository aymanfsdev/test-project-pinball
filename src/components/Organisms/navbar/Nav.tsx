import '../../../styles/components/Organisms/Nav.scss';

import React, { useState } from 'react';

import { ValueType } from '../../../types';
import { NavProps } from '../../../types/props';
import NormalInput from '../../Atoms/Form/NormalInput';
import Icon from '../../Atoms/Icon';
import UserAvatar from '../../Molecules/Avatar/Avatar';

export default function Nav(props: NavProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const collapseSidebar = () => {
    props.setCollapse(!props.collapse);
  };
  const handleSearchChange = (e: ValueType) => {
    setSearchQuery(e.value as string);
  };

  return (
    <div className="bg-navbar d-flex align-items-center">
      <div className="menu-area mr-2 col-xs-1 col-sm-1 col-md-1 col-lg-1 col-xl-1">
        <button className="btn w-auto" onClick={collapseSidebar}>
          <Icon name="menu" />
        </button>
      </div>
      <div className="search-area col-xs-1 col-sm-1 col-md-1 col-lg-2 col-xl-2 d-flex">
        <img src={'/icons/search.svg'} width={13} alt={'Search Iccon'} />
        <NormalInput
          placeholder={'Greita paieška'}
          bgStyles={false}
          inputColor={'#2D5474'}
          value={searchQuery}
          name="searchQuery"
          handleChange={handleSearchChange}
        />
      </div>
      {/* <div className="scol-xs-1 col-sm-1 col-md-1 col-lg-2 col-xl"/> */}
      <div className="user-panel  col-xs-1 col-sm-1 col-md-4 col-lg-2 col-xl-3 ml-auto d-flex align-items-center">
        <p>Find the PinballMap</p>
        <UserAvatar />
      </div>
    </div>
  );
}
