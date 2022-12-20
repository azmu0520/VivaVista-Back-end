import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: ${({ width }) => (width ? width : 'fit-content')};
  height: ${({ height }) => (height ? height : '30px')};
  padding: ${({ padding }) => (padding ? padding : '0')};
  color: ${({ color }) => (color ? color : '#fff')};
  margin: ${({ margin }) => (margin ? margin : '0')};
  background: ${({ bg }) => (bg ? bg : '#2B63C0')};
  border: ${({ border }) => (border ? border : '')};
  border-radius: ${({ radius }) => (radius ? radius : '8px')};
  font-family: 'Roboto-Regular';
  font-weight: 400;
  font-size: ${({ size }) => (size ? size : '12px')};
  line-height: 24px;
`;
