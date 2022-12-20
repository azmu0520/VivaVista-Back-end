import React from 'react';
import { Wrap, AddDetails, Excell, Proxy } from './style';
import Button from '../Generic/Button';
import excelData from '../../utilits/excelData.json';
import * as FileSaver from 'file-saver';
import XLSX from 'sheetjs-style';
import img from '../../assets/images/excel.jpg';
export default function Add() {
  const fileType =
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
  const fileExtension = '.xlsx';
  const exportToExcel = async (fileName) => {
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ['data'] };
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, fileName + fileExtension);
  };
  return (
    <Wrap>
      <Wrap.Header>
        <Wrap.Title>Создание документа: Счёт-фактура</Wrap.Title>
        <Button width={'176px'} height='48px' size='16px' margin='0 0 0 auto'>
          Назад/Отменить
        </Button>
      </Wrap.Header>
      <AddDetails>
        <AddDetails.Item>
          <AddDetails.Title>Тип счета </AddDetails.Title>
          <AddDetails.Select>
            <option value='standart'>Стандарт</option>
            <option value='standart'>Стандарт 2</option>
            <option value='standart'>Стандарт 3</option>
          </AddDetails.Select>
        </AddDetails.Item>
        <AddDetails.Item />
        <AddDetails.Item>
          <AddDetails.Title>Номер счет-фактуры </AddDetails.Title>
          <AddDetails.Input placeholder={'Номер счет-фактуры'} />
        </AddDetails.Item>
        <AddDetails.Item>
          <AddDetails.Title>Дата документ </AddDetails.Title>
          <AddDetails.Input placeholder={'Дата документа'} />
        </AddDetails.Item>
        <AddDetails.Item>
          <AddDetails.Title>Введите номер контракта </AddDetails.Title>
          <AddDetails.Input placeholder={'Введите номер контракта'} />
        </AddDetails.Item>
        <AddDetails.Item>
          <AddDetails.Title>Дата до </AddDetails.Title>
          <AddDetails.Input placeholder={'Дата контракта'} />
        </AddDetails.Item>
      </AddDetails>

      <AddDetails top>
        <AddDetails.MainTitle>Ваша информация</AddDetails.MainTitle>
        <AddDetails.MainTitle>Информация о подрядчике</AddDetails.MainTitle>
        <AddDetails.Item>
          <AddDetails.Title>ИНН </AddDetails.Title>
          <AddDetails.Select>
            <option value='standart'>Стандарт</option>
            <option value='standart'>Стандарт 2</option>
            <option value='standart'>Стандарт 3</option>
          </AddDetails.Select>
        </AddDetails.Item>

        <AddDetails.Item>
          <AddDetails.Title>
            Номер счета <span>*</span>
          </AddDetails.Title>
          <AddDetails.AccountWrap>
            <Button
              border='1px solid #FE346E'
              width='256px'
              height='48px'
              color='#FE346E'
              bg='white'
            >
              Обязательное поле
            </Button>
            <AddDetails.Swtich>
              <span>Односторонний счет?</span>
              <label class='switch'>
                <input type='checkbox' />
                <span class='slider round'></span>
              </label>
            </AddDetails.Swtich>
          </AddDetails.AccountWrap>
        </AddDetails.Item>
        <AddDetails.Item>
          <AddDetails.Title>НДС регистрационный номер </AddDetails.Title>
          <AddDetails.Input placeholder={'Введите данные'} />
        </AddDetails.Item>
        <AddDetails.Item>
          <AddDetails.Title>Компания-партнер </AddDetails.Title>
          <AddDetails.Input placeholder={'Введите данные'} />
        </AddDetails.Item>
        <AddDetails.Items>
          <AddDetails.Item>
            <AddDetails.Title>Номер счета </AddDetails.Title>
            <AddDetails.Input placeholder={'Введите данные'} />
          </AddDetails.Item>
          <AddDetails.Item>
            <AddDetails.Title>Номер счета </AddDetails.Title>
            <AddDetails.Input placeholder={'Введите данные'} />
          </AddDetails.Item>
        </AddDetails.Items>
        <AddDetails.Items>
          <AddDetails.Item>
            <AddDetails.Title>Номер счета </AddDetails.Title>
            <AddDetails.Input placeholder={'Введите данные'} />
          </AddDetails.Item>
          <AddDetails.Item>
            <AddDetails.Title>МФО </AddDetails.Title>
            <AddDetails.Input placeholder={'Введите данные'} />
          </AddDetails.Item>
        </AddDetails.Items>
        <AddDetails.Item>
          <AddDetails.Title>Адрес </AddDetails.Title>
          <AddDetails.Input placeholder={'Введите данные'} />
        </AddDetails.Item>
        <AddDetails.Item>
          <AddDetails.Title>Адрес </AddDetails.Title>
          <AddDetails.Input placeholder={'Введите данные'} />
        </AddDetails.Item>
        <AddDetails.Items>
          <AddDetails.Item>
            <AddDetails.Title>Директор </AddDetails.Title>
            <AddDetails.Input placeholder={'Введите данные'} />
          </AddDetails.Item>
          <AddDetails.Item>
            <AddDetails.Title>Главный бухгалтер </AddDetails.Title>
            <AddDetails.Input placeholder={'Введите данные'} />
          </AddDetails.Item>
        </AddDetails.Items>
        <AddDetails.Items>
          <AddDetails.Item>
            <AddDetails.Title>Директор </AddDetails.Title>
            <AddDetails.Input placeholder={'Введите данные'} />
          </AddDetails.Item>
          <AddDetails.Item>
            <AddDetails.Title>Главный бухгалтер </AddDetails.Title>
            <AddDetails.Input placeholder={'Введите данные'} />
          </AddDetails.Item>
        </AddDetails.Items>
      </AddDetails>
      <Excell>
        <Excell.Header>
          <Excell.DownloadItem>
            <Excell.Download /> <span>Загрузить из Excel</span>
          </Excell.DownloadItem>
          <Excell.DownloadItem onClick={() => exportToExcel('Export Excel')}>
            <Excell.Download /> <span>Скачать шаблон</span>
          </Excell.DownloadItem>
        </Excell.Header>
        <Excell.Image src={img} />
      </Excell>
      <Proxy>
        <Excell.Header>
          <AddDetails.MainTitle>Доверенность</AddDetails.MainTitle>
          <AddDetails.Select width>
            <option value='value1'>Выберите доверенность</option>
            <option value='value1'> доверенность</option>
          </AddDetails.Select>
        </Excell.Header>
        <AddDetails.Items margin>
          <AddDetails.Item>
            <AddDetails.Title>Номер доверенности </AddDetails.Title>
            <AddDetails.Input placeholder={'Введите данные'} />
          </AddDetails.Item>
          <AddDetails.Item>
            <AddDetails.Title>Дата доверенности </AddDetails.Title>
            <AddDetails.Input placeholder={'Введите данные'} />
          </AddDetails.Item>
          <AddDetails.Item>
            <AddDetails.Title>ИНН </AddDetails.Title>
            <AddDetails.Input placeholder={'Введите данные'} />
          </AddDetails.Item>
          <AddDetails.Item>
            <AddDetails.Title>Ответственное лицо ФИО </AddDetails.Title>
            <AddDetails.Input placeholder={'Введите данные'} />
          </AddDetails.Item>
        </AddDetails.Items>
      </Proxy>
      <Proxy.Btns>
        <Button bg='#FE346E' width={'150px'} height='48px'>
          Отменить
        </Button>
        <Button width={'224px'} height='48px'>
          Показать документ
        </Button>
        <Button width={'128px'} height='48px' margin='0 0 0 auto'>
          Сохранить
        </Button>
        <Button width={'130px'} height='48px'>
          Подписать
        </Button>
      </Proxy.Btns>
    </Wrap>
  );
}
