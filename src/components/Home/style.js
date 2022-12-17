import styled from 'styled-components';
import { Tabs } from 'antd';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px;
`;
const Title = styled.h2`
  font-family: 'Roboto-Bold';
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
  letter-spacing: 0.02em;
  color: #303030;
`;

const AntTabs = styled(Tabs)``;

export { Wrap, Title, AntTabs };
