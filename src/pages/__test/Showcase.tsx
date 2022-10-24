import React from 'react';

import Heading from '../../components/Atoms/Heading';
import Breadcrump from '../../components/Molecules/Breadcrump';
import Details from '../../components/Molecules/custom/Details';
import { Tab, Tabs } from '../../components/Molecules/custom/Tabs';
import Table from '../../components/Organisms/Table';
import { TableActionsType } from '../../types/props';

interface IPerson {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
}

const data: IPerson[] = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@email.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 3,
    name: 'John Doe',
    email: 'john1@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 4,
    name: 'John Doe',
    email: 'john4@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 3,
    name: 'John Doe',
    email: 'john1@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 4,
    name: 'John Doe',
    email: 'john4@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 2,
    name: 'Jane Doe',
    email: 'jane@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 3,
    name: 'John Doe',
    email: 'john1@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
  {
    id: 4,
    name: 'John Doe',
    email: 'john4@gmail.com',
    phone: '+1 (123) 456-7890',
    address: '123 Main St, Anytown, CA 12345',
  },
];

const actions: TableActionsType<IPerson>[] = [
  {
    name: 'Edit',
    icon: 'add',
    handleAction: (item: IPerson) => {
      console.log(item);
    },
  },
  {
    name: 'delete',
    icon: 'add',
    handleAction: (item: IPerson) => {
      alert('deleted ' + item.name);
    },
  },
];

export default function ShowCase() {
  return (
    <div className="p-5">
      <Heading fontSize="xl" fontWeight="bold">
        Heading
      </Heading>
      <div className="py-2">
        <Breadcrump title="Darbuotojai" navigation={['Žmonių valdymas', 'Darbuotojai']} />
      </div>
      <Table
        data={data}
        uniqueCol="id"
        hide={['id']}
        rowsPerPage={10}
        totalPages={10}
        actions={actions}
        onChangePage={(_page: number) => {}}
      />

      <Tabs className="my-4" activeIndex={1}>
        <Tab label="Students">
          <h1 className="text-3xl text-primary-500">Students</h1>
        </Tab>
        <Tab label="Instructors">
          <h2 className="text-3xl text-green-400">{'Instructor'}</h2>
        </Tab>
        <Tab label="Admins" disabled={false}>
          <h2 className="text-3xl text-yellow-300 font-bold">Admins here</h2>
        </Tab>
      </Tabs>

      <Details
        title="Duomenys"
        data={{
          name: 'John Doe',
          id: 4,
        }}
      />
    </div>
  );
}
