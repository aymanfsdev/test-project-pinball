import '../../styles/layouts/MainLayout.scss';

import React, { useState } from 'react';

import Nav from '../../components/Organisms/navbar/Nav';
import Sidebar from '../../components/Organisms/sidebar/Sidebar';
import Main from '../../components/Organisms/Test/Main';

export default function MainLayout() {
  const [collapse, setCollapse] = useState(false);
  const [data, setData] = useState('');

  return (
    <div className={'container-fluid bg'}>
      <div className="row">
        <div
          className={
            ' d-md-none pt-2 rounded-circle shadow-sm cursor-pointer text-center'
          }>
          {
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24">
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
          }
        </div>

        <div
          className={
            !collapse
              ? 'col-0 d-none d-md-block col-md-3 col-side p-0 '
              : 'col-0 d-none col-md-3 col-side p-0 '
          }>
          <div className="sidebar-content">
            <Sidebar />
          </div>
        </div>
        <div
          className={
            !collapse ? 'col-side-content col-12 col-md-9 p-0' : 'col-side-content-full col-12 p-0'
          }>
          <Nav collapse={collapse} setCollapse={setCollapse} />

          <div className={' main-content '}>
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
}
