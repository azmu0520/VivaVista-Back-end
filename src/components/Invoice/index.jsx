import React from 'react';
import Button from '../Generic/Button';
import { Wrap } from './style';
import invoice from '../../assets/images/invoice.png';
export default function Invoice() {
  return (
    <Wrap>
      <Wrap.Breadcum>
        <span>Счёт-фактура </span>
        <span>&#8594;</span>
        <span className='active'>Счет-фактура №03-60378 от 31.03.2021</span>
      </Wrap.Breadcum>
      <Wrap.Cards>
        <Wrap.Card flex>
          <Wrap.CardDetail flex>
            <Wrap.CardTitle>Счет-фактура</Wrap.CardTitle>
            <Wrap.CardTitle size>№03-60378 от 31.03.2021</Wrap.CardTitle>
            <span className='status_num'>566800736</span>
            <Wrap.Sender top>
              <h3>Отправитель:</h3>
              <span>
                ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "VENKON GROUP"
              </span>
            </Wrap.Sender>
            <Wrap.Sender>
              <h3>Дата:</h3> <span> 2021-04-09 12:40:13</span>
            </Wrap.Sender>
          </Wrap.CardDetail>
          <Wrap.CardDetail>
            <Wrap.GNK>Статус документа в ГНК</Wrap.GNK>
            <Wrap.Btns>
              <Button width={'110px'} height='30px'>
                Скачать
              </Button>
              <Button width={'110px'} height='30px' margin='0 0 0 12px'>
                Печать
              </Button>
            </Wrap.Btns>
          </Wrap.CardDetail>
        </Wrap.Card>
        <Wrap.Card column>
          <Wrap.CardHeader>
            <div className='statusWrap'>Статус:</div>
            <div className='statusBtn'>
              <Wrap.Dnwarrow /> Прикрепить файл
            </div>
          </Wrap.CardHeader>
          <span className='status_text'> ОЖИДАЕТ ВАШЕЙ ПОДПИСИ </span>
          <Wrap.Btns>
            <Button width={'167px'} height='48px' size='16px' bg='#0FBE7B'>
              Подписать
            </Button>
            <Button
              width={'167px'}
              height='48px'
              bg='#FE346E'
              size='16px'
              margin='0 0 0 10px'
            >
              Отказаться
            </Button>
          </Wrap.Btns>
        </Wrap.Card>
      </Wrap.Cards>
      <Wrap.ImageWrap>
        <Wrap.Image src={invoice} />
      </Wrap.ImageWrap>
    </Wrap>
  );
}
