import React, { useState } from 'react';
import { Wrap, Header, Row } from './style';
import Button from '../../Generic/Button';
import { useEffect } from 'react';
export default function Table() {
  let tableHeader = [
    'Статус',
    'Тип документа',
    'Дата обновления',
    'Контрагент ',
    'Номер и дата документа',
    'Номер и дата договора',
    'Стоимость поставки',
  ];
  let data = [
    {
      id: 1,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 28.02.2021',
      delivery_cost: 'Публичная оферта от 15.12.2020',
    },
    {
      id: 2,
      status: 'signed',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 28.02.2021',
      delivery_cost: 'Публичная оферта от 15.12.2020',
    },
    {
      id: 3,
      status: 'pending',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 28.02.2021',
      delivery_cost: 'Публичная оферта от 15.12.2020',
    },
    {
      id: 4,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 28.02.2021',
      delivery_cost: 'Публичная оферта от 15.12.2020',
    },
    {
      id: 5,
      status: 'pending',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 28.02.2021',
      delivery_cost: 'Публичная оферта от 15.12.2020',
    },
    {
      id: 6,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 28.02.2021',
      delivery_cost: 'Публичная оферта от 15.12.2020',
    },
    {
      id: 7,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 28.02.2021',
      delivery_cost: 'Публичная оферта от 15.12.2020',
    },
    {
      id: 8,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 28.02.2021',
      delivery_cost: 'Публичная оферта от 15.12.2020',
    },
    {
      id: 9,
      status: 'draft',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 28.02.2021',
      delivery_cost: 'Публичная оферта от 15.12.2020',
    },
    {
      id: 10,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 28.02.2021',
      delivery_cost: 'Публичная оферта от 15.12.2020',
    },
    {
      id: 11,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 28.02.2021',
      delivery_cost: 'Публичная оферта от 15.12.2020',
    },
    {
      id: 12,
      status: 'canceled',
      type: 'Счет-фактура (вх.)',
      update: '09.03.2021',
      counterparty: 'ООО VENKON GROUP',
      document_number_date: '998998933800',
      contract_number_date: '02-53519 от 28.02.2021',
      delivery_cost: 'Публичная оферта от 15.12.2020',
    },
  ];
  const initialState = data.reduce(
    (o, key) => ({ ...o, [`check${key.id}`]: false }),
    {}
  );
  const [checkedAll, setCheckedAll] = useState(false);
  const [checked, setChecked] = useState(initialState);

  const toggleCheck = (inputName) => {
    setChecked((prevState) => {
      const newState = { ...prevState };
      newState[inputName] = !prevState[inputName];
      return newState;
    });
  };
  const selectAll = (value) => {
    setCheckedAll(value);
    setChecked((prevState) => {
      const newState = { ...prevState };
      for (const inputName in newState) {
        newState[inputName] = value;
      }
      return newState;
    });
  };

  useEffect(() => {
    let allChecked = true;
    for (const inputName in checked) {
      if (checked[inputName] === false) {
        allChecked = false;
      }
    }
    if (allChecked) {
      setCheckedAll(true);
    } else {
      setCheckedAll(false);
    }
  }, [checked]);
  return (
    <Wrap>
      <Wrap.Navbar>
        <Wrap.Title>Таблица</Wrap.Title>
        <Wrap.Status>
          <div className='wrapper'>
            <span className='canceled' />
            <h4 className='title'>Отменен</h4>
          </div>
          <div className='wrapper'>
            <span className='signed' />
            <h4 className='title'>Подписано</h4>
          </div>
          <div className='wrapper'>
            <span className='pending' />
            <h4 className='title'>В ожидании</h4>
          </div>
          <div className='wrapper'>
            <span className='draft' />
            <h4 className='title'>Черновик</h4>
          </div>
        </Wrap.Status>
        <Wrap.Btns>
          <Button width={'124px'}>Открыть в Exсel</Button>
          <Button className='btn-left' width={'134px'}>
            <Wrap.FilterIcon /> Фильтр таблицы
          </Button>
        </Wrap.Btns>
      </Wrap.Navbar>
      <Header>
        <input
          type='checkbox'
          onChange={(event) => selectAll(event.target.checked)}
          checked={checkedAll}
        />
        {tableHeader.map((item) => (
          <Header.Title>{item}</Header.Title>
        ))}
      </Header>
      {data?.map((item) => {
        let element = Object.keys(item);
        element.shift();
        return (
          <Row key={item.id} className='grid__row'>
            <input
              type='checkbox'
              name={item.id}
              id={item.id}
              onChange={() => toggleCheck(`check${item.id}`)}
              checked={checked[`check${item.id}`]}
            />
            {element.map((value) => {
              return (
                <Row.Item key={`${value}-${item.id}`} bg={item[value]}>
                  {value == 'status' ? (
                    <label htmlFor={item.id} className='status' />
                  ) : (
                    <label htmlFor={item.id}>{item[value]}</label>
                  )}
                </Row.Item>
              );
            })}
          </Row>
        );
      })}
    </Wrap>
  );
}
