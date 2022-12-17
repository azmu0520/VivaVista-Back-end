import React from 'react';
import { Title, Wrap, AntTabs } from './style';
import { item } from '../../utilits/tabs';
export default function () {
  return (
    <Wrap>
      <Title>Документы</Title>
      <AntTabs defaultActiveKey='1' items={item} />
    </Wrap>
  );
}
