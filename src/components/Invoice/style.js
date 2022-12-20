import styled from 'styled-components';
import { ReactComponent as Dnwarrow } from '../../assets/icons/dnwarrow.svg';
export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background: #f8fafc;
  padding: 32px;
`;

Wrap.Breadcum = styled.div`
  display: flex;
  align-items: center;
  span {
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.01em;
    color: #8c8c8c;
    margin-right: 8px;
  }
  .active {
    color: #2b63c0;
  }
`;

Wrap.Cards = styled.div`
  display: flex;
  /* align-items: center; */
  margin-top: 24px;
  gap: 32px;
`;

Wrap.Card = styled.div`
  display: flex;
  flex-direction: ${({ column }) => (column ? 'column' : '')};
  flex: ${({ flex }) => (flex ? '3' : '2')};
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding: 24px;
  .status_num {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: #0fbe7b;
  }
  .status_text {
    font-weight: 700;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: #ffa41d;
  }
`;

Wrap.Doc_Status = styled.div`
  display: flex;
  flex-direction: column;
`;

Wrap.CardTitle = styled.h2`
  font-family: 'Roboto-Bold';
  font-style: normal;
  font-weight: 700;
  font-size: ${({ size }) => (size ? '16px' : '22px')};
  line-height: ${({ size }) => (size ? '19px' : '30px')};
  letter-spacing: 0.02em;
  color: #303030;
`;

Wrap.Sender = styled.div`
  display: flex;

  h3 {
    font-family: 'Roboto-Medium';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #333333;
  }
  span {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #303030;
    margin-left: 10px;
  }
  margin-top: 18px;
`;

Wrap.CardDetail = styled.div`
  display: flex;
  flex-direction: column;
  flex: ${({ flex }) => (flex ? 3 : 2)};
`;

Wrap.GNK = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #2b63c0;
  margin-left: auto;
`;

Wrap.Btns = styled.div`
  display: flex;
  align-items: center;
  margin: auto 0 0 auto;
`;

Wrap.CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .statusBtn {
    display: flex;
    align-items: center;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    color: #2b63c0;
  }
  .statusWrap {
    display: flex;
    flex-wrap: wrap;
    font-weight: 700;
    font-size: 22px;
    line-height: 30px;
    letter-spacing: 0.02em;
    color: #303030;
  }
`;

Wrap.Dnwarrow = styled(Dnwarrow)`
  margin-right: 10px;
`;

Wrap.ImageWrap = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 23, 82, 0.04);
  border-radius: 8px;
  padding: 24px;
  margin-top: 12px;
`;
Wrap.Image = styled.img`
  width: 100%;
  height: 100%;
`;
