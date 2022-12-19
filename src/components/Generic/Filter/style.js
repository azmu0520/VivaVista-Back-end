import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  height: 174px;
  width: 100%;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 8px;
`;

Wrap.Header = styled.div`
  display: flex;
  align-items: center;
`;

Wrap.Title = styled.h3`
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #303030;
`;

Wrap.ClearFilter = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #2b63c0;
  margin-left: auto;
`;

Wrap.Body = styled.div`
  display: flex;
  gap: 16px;
  margin: 16px 0;
`;

export const Filter = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => (flex ? flex : '1')};
`;

Filter.Title = styled.div`
  font-family: 'Roboto-Medium';
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #333333;
  margin-bottom: 8px;
`;

Filter.Input = styled.input`
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
  padding: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8c8c8c;
  outline: none;
`;

Filter.Select = styled.select`
  width: 100%;
  height: 48px;
  background: #ffffff;
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
  padding: 12px;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #8c8c8c;
  outline: none;
`;
