import React from 'react';
import { useUsersContext } from '../../../context/users/context';
import { Wrap, Filter } from './style';

export default function GenericFilter({ title }) {
  const [{ doc_type, counterparty }, dispatch] = useUsersContext();
  let handleStatus = ({ target }) => {
    dispatch({ type: 'setStatus', payload: target.value });
  };

  let handleSearch = ({ target }) => {
    dispatch({ type: target.name, payload: target.value });
  };
  let handleDate = ({ target }) => {
    console.log(target.value, 'p');
    dispatch({ type: target.name, payload: target.value });
  };
  console.log(counterparty, doc_type);
  return (
    <Wrap>
      <Wrap.Header>
        <Wrap.Title>{title} Фильтр</Wrap.Title>
        <Wrap.ClearFilter>Сбросить фильтр</Wrap.ClearFilter>
      </Wrap.Header>
      <Wrap.Body>
        <Filter>
          <Filter.Title>ТИП ДОКУМЕНТА</Filter.Title>
          <Filter.Input
            placeholder='Номер документа'
            name='doc_type'
            onChange={handleSearch}
          />
        </Filter>
        <Filter>
          <Filter.Title>Статус документа</Filter.Title>
          <Filter.Select placeholder='Статус документа' onChange={handleStatus}>
            <option value='all'>Все</option>
            <option value='canceled'>Отменен</option>
            <option value='signed'>Подписано</option>
            <option value='pending'>Ожидании</option>
            <option value='draft'>Черновик</option>
          </Filter.Select>
        </Filter>
        <Filter>
          <Filter.Title>Поиск по контрагенту</Filter.Title>
          <Filter.Input
            placeholder='Номер документа'
            name='counterparty'
            onChange={handleSearch}
          />
        </Filter>
        <Filter flex='0.5'>
          <Filter.Title>Номер документа</Filter.Title>
          <Filter.Input
            type='date'
            onChange={handleDate}
            name='doc_date'
            placeholder='MM-DD-YYYY'
          />
        </Filter>
        <Filter flex='0.5'>
          <Filter.Title>Номер ДОГОВОРА</Filter.Title>
          <Filter.Input
            placeholder='Номер документа'
            type='date'
            onChange={handleDate}
            name='contract_date'
          />
        </Filter>
      </Wrap.Body>
    </Wrap>
  );
}
