import '../../../styles/components/Molecules/Avatar/Avatar.scss';

import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { queryClient } from '../../../plugins/react-query';
import Dropdown from '../../Atoms/custom/Dropdown';

export default function Avatar() {
  const navigate = useNavigate();

  return (
    <div className="avatar d-flex">
      {/* <span className="circle" /> */}
      <img
        src={'/assets/images/avatar.png'}
        className="rounded-profile"
        alt="avatar"
      />
      <Dropdown
        header={
          <p
            className="mb-0"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            {'John'}
          </p>
        }>
        <div className="d-flex flex-column px-3 py-2 shadow rounded bg-white">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="#"
            onClick={() => console.log('you clicked profile update anchor tag')}
            className="text-sm text-black text-decoration-none">
            Profile
          </a>
          <a
            href=""
            className="text-sm text-black text-decoration-none">
            Logout
          </a>
        </div>
      </Dropdown>
    </div>
  );
}
