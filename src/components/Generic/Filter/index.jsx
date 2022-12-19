import React from 'react';
import { Wrap, Filter } from './style';

export default function GenericFilter() {
  return (
    <Wrap>
      <Wrap.Header>
        <Wrap.Title>Фильтр</Wrap.Title>
        <Wrap.ClearFilter>Сбросить фильтр</Wrap.ClearFilter>
      </Wrap.Header>
      <Wrap.Body>
        <Filter>
          <Filter.Title>Номер документа</Filter.Title>
          <Filter.Input placeholder='Номер документа' />
        </Filter>
        <Filter>
          <Filter.Title>Статус документа</Filter.Title>
          <Filter.Select placeholder='Статус документа'>
            <option value='active'>активный</option>
            <option value='disactive'>неактивный</option>
          </Filter.Select>
        </Filter>
        <Filter>
          <Filter.Title>Поиск по контрагенту</Filter.Title>
          <Filter.Input placeholder='Номер документа' />
        </Filter>
        <Filter flex='0.5'>
          <Filter.Title>Номер документа</Filter.Title>
          <Filter.Input placeholder='Номер документа' type='date' />
        </Filter>
        <Filter flex='0.5'>
          <Filter.Title>Номер документа</Filter.Title>
          <Filter.Input placeholder='Номер документа' type='date' />
        </Filter>
      </Wrap.Body>
    </Wrap>
  );
}
