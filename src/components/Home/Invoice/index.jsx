import React from 'react';
import GenericFilter from '../../Generic/Filter';
import Table from '../../Generic/Table';

export default function Invoice() {
  return (
    <div>
      <GenericFilter title='Счет фактуры' />
      <Table />
    </div>
  );
}
