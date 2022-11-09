import React, { useMemo } from 'react';
import { Table } from './table';
import * as Icon from 'react-feather'
import Badge from '../badge/badge';
import Button from '../forms/button';
import LogoComp from '../logocomp/logocomp';
import spotify from '../../components/assets/icons/spotify.png'
import visa from '../../components/assets/icons/visa.png'

export const DashTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: 'Transaction',
        accessor: 'tran',
        Cell: ({ value }) =>  <LogoComp src={spotify} title={value} />,
      },
      {
        Header: 'Amount',
        accessor: 'amount',
        Cell: ({ value }) => (
          <h2 className="text-vencru-main text-sm">
            {value}
          </h2>
        ),
      },
      {
        Header: 'Date',
        accessor: 'date',
        Cell: ({ value }) => <h2>{value}</h2>,
      },
      {
        Header: 'Category',
        accessor: 'category',
        Cell: ({ value }) => <Badge category = {value}>{value}</Badge>
      },
      {
        Header: 'Card',
        accessor: 'card',
        Cell: ({value}) => <LogoComp src={visa} title = {value} date = 'Expiry 06/2024' />
      },
      {
        Header: '',
        accessor: 'action',
        Cell: ({ value }) => <Button imgAfter={<Icon.Edit2 />} link >{value}</Button>,
      },
    ],
    []
  );
  const tabledata = React.useMemo(
    () => [
      {
        tran: 'Spotify',
        amount: '$10.00',
        date: 'Wed 1:00pm',
        category: 'Subscriptions',
        card: 'Visa 1234',
        action: '',
      },
      {
        tran: 'Spotify',
        amount: '$10.00',
        date: 'Wed 1:00pm',
        category: 'Food and dining',
        card: 'Visa 1234',
        action: '',
      },
      {
        tran: 'Spotify',
        amount: '$10.00',
        date: 'Wed 1:00pm',
        category: 'Income',
        card: 'Visa 1234',
        action: '',
      },
      {
        tran: 'Spotify',
        amount: '$10.00',
        date: 'Wed 1:00pm',
        category: 'Subscriptions',
        card: 'Visa 1234',
        action: '',
      },
      {
        tran: 'Spotify',
        amount: '$10.00',
        date: 'Wed 1:00pm',
        category: 'Groceries',
        card: 'Visa 1234',
        action: '',
      },
    ],
    []
  );
  return (
    <div className="w-full space-y-8 border border-ricive-stroke2 rounded-lg ">
        <header className='flex flex-col items-center lg:flex-row justify-between overflow-scroll p-4 border-b border-ricive-stroke'>
            <h2>Recent Transactions</h2>
            <div className='flex items-start space-x-4'>
                <Button imgBefore={<Icon.DownloadCloud strokeWidth= '2px' size='15px' />} roundleft roundright >Download</Button>
                <Button roundleft roundright >View Report</Button>
            </div>
        </header>
        <div className=' p-4 flex items-center justify-start overflow-scroll'>
            <Button roundleft>View all</Button>
            <Button straight>Monitored</Button>
            <Button roundright >Unmonitored</Button>
        </div>
      <Table 
        columns={columns}
        data={tabledata}
        withShadowRnd={true}
        variant="border"
      />
    </div>
  );
};
