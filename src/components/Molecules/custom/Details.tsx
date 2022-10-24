import React from 'react';

import Heading from '../../Atoms/Heading';

interface IDataType {
  [index: string]: string | number;
}

interface IDetailsProps {
  title: string;
  data: IDataType;
}

export default function Details({ title, data }: IDetailsProps) {
  return (
    <div className="py-3">
      <Heading fontSize="md" fontWeight="bold">
        {title}
      </Heading>
      <div className="my-3 bg-light-gray">
        {Object.keys(data).map((key, index) => {
          return (
            <div
              key={index}
              className="d-flex  align-items-center border-bottom py-2 px-3 text-xs">
              <span className="text-capitalize font-bold">
                {key.replaceAll('_', ' ').toLocaleLowerCase()}:
              </span>
              <span className="px-2">{data[key]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
