import React, { useState } from 'react';
import { Wrap, Header, Row, Footer } from './style';
import Button from '../../Generic/Button';
import { useEffect } from 'react';
import { useUsersContext } from '../../../context/users/context';
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
  const [
    { data, status, doc_type, counterparty, doc_date, contract_date },
    dispatch,
  ] = useUsersContext();
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
  }, [checked, status]);
  return (
    <>
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
        {data
          .filter((i) => (status == 'all' ? true : i.status == status))
          .filter((i) =>
            doc_type == 'all'
              ? true
              : i.type.toLowerCase().includes(doc_type.toLowerCase())
          )
          .filter((i) =>
            doc_type == 'all'
              ? true
              : i.type.toLowerCase().includes(doc_type.toLowerCase())
          )
          .filter((i) => {
            let date = i.contract_number_date.split(' ');
            return doc_date == 'all' ? true : date[2] == doc_date;
          })
          .filter((i) => {
            let date = i.delivery_cost.split(' ');
            return contract_date == 'all' ? true : date[3] == contract_date;
          })
          .filter((i) =>
            counterparty == 'all'
              ? true
              : i.counterparty
                  .toLowerCase()
                  .includes(counterparty.toLowerCase())
          )
          ?.map((item) => {
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
      <Footer>
        <Footer.Controllers>
          <Button width={'158px'} height='48px' size='16px'>
            <Footer.IconYes />
            Подписать
          </Button>
          <Button
            width={'150px'}
            height='48px'
            bg='#FE346E'
            margin={'0 0 0 16px'}
            size='16px'
          >
            <Footer.IconNo />
            Отменить
          </Button>
          <Footer.SelectWrap>
            <Footer.SizeSelect>
              <option value='10'>
                Показать по: <span> 10</span>
              </option>
              <option value='20'>
                Показать по: <span> 20</span>
              </option>
              <option value='30'>
                Показать по: <span> 30</span>
              </option>
            </Footer.SizeSelect>
            <Footer.Arrow />
          </Footer.SelectWrap>
        </Footer.Controllers>
        <Footer.PaginationWrap>
          <Button width='97px' height={'40px'}>
            <Footer.Arrow page />
            Назад
          </Button>
          <Footer.PaginationNums>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>....</span>
            <span>16</span>
          </Footer.PaginationNums>
          <Button width='135px' height={'40px'}>
            Следующая
            <Footer.Arrow page={'true'} left />
          </Button>
        </Footer.PaginationWrap>
      </Footer>
    </>
  );
}
