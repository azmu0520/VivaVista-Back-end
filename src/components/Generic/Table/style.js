import styled from 'styled-components';
import { ReactComponent as FilterIcon } from '../../../assets/icons/filter.svg';
import { ReactComponent as Yes } from '../../../assets/icons/yes.svg';
import { ReactComponent as No } from '../../../assets/icons/no.svg';
import { ReactComponent as Arrow } from '../../../assets/icons/arrow.svg';

const getBgColor = ({ bg }) => {
  bg = bg?.toLowerCase();
  switch (bg) {
    case 'canceled':
      return {
        bg: '#FE346E',
      };
    case 'signed':
      return {
        bg: '#0FBE7B',
      };
    case 'pending':
      return {
        bg: '#FFA41D',
      };
    case 'draft':
      return {
        bg: '#D9D9D9',
      };

    default:
      return {
        bg: '#D9D9D9',
      };
  }
};

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  border-radius: 8px;
  padding: 24px;
`;

Wrap.Navbar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 70px;
`;

Wrap.Title = styled.div`
  font-family: 'Roboto-Bold';
  font-weight: 700;
  font-size: 22px;
  line-height: 30px;
  letter-spacing: 0.02em;
  color: #303030;
`;

Wrap.Status = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
  .wrapper {
    display: flex;
    align-items: center;
    margin-right: 16px;
  }
  .wrapper span {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 9px;
  }
  .canceled {
    background: #fe346e;
  }
  .signed {
    background: #0fbe7b;
  }
  .pending {
    background: #ffa41d;
  }
  .draft {
    background: #d9d9d9;
  }
`;

Wrap.Btns = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  .btn-left {
    margin-left: 24px;
  }
`;

Wrap.FilterIcon = styled(FilterIcon)`
  margin-right: 4px;
`;

export const Header = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  grid-template-columns: 10px 0.4fr repeat(6, 1fr);
  margin: 16px 0;
`;

Header.Title = styled.div`
  font-family: 'Roboto-Bold';
  font-weight: 700;
  font-size: 9px;
  line-height: 11px;
  letter-spacing: 0.01em;
  text-transform: uppercase;
  color: #303030;
  text-align: center;
`;
export const Row = styled.div`
  width: 100%;
  display: grid;
  align-items: center;
  :nth-child(odd) {
    background-color: #f8fafc;
  }
  grid-template-columns: 10px 0.4fr repeat(6, 1fr);
  height: 52px;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.04);
`;

Row.Item = styled.div`
  text-align: center;
  label {
    font-family: 'Roboto-Regular';
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.01em;
    text-transform: uppercase;
    color: #303030;
  }
  .status {
    display: block;
    margin: 0 auto;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: ${(bg) => getBgColor(bg).bg} !important;
  }
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
`;

Footer.Controllers = styled.div`
  display: flex;
  align-items: center;
`;

Footer.IconYes = styled(Yes)`
  margin-right: 8px;
`;
Footer.IconNo = styled(No)`
  margin-right: 8px;
`;

Footer.SelectWrap = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  position: relative;
`;

Footer.SizeSelect = styled.select`
  width: 182px;
  height: 48px;
  background: #ffffff;
  border: 0.5px solid #d9d9d9;
  border-radius: 8px;
  -webkit-appearance: none;
  -moz-appearance: none;
  padding: 12px;
  position: relative;
  outline: none;
`;

Footer.Arrow = styled(Arrow)`
  position: ${({ page }) => (page ? '' : 'absolute')};
  margin-right: ${({ page }) => (page ? '8px' : '0')};
  margin-left: ${({ left }) => (left ? '8px' : '0')};
  path {
    fill: ${({ page }) => (page ? 'white' : '')};
  }
  transform: ${({ page, left }) =>
    page && left ? 'rotate(-90deg)' : 'rotate(90deg)'};

  right: 10px;
`;

Footer.PaginationWrap = styled.div`
  display: flex;
  align-items: center;
  margin-top: 24px;
  margin-left: auto;
`;

Footer.PaginationNums = styled.div`
  display: flex;
  align-items: start;
  padding: 0 30px;
  span:first-child {
    color: #2b63c0;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 111.63%;
    color: #1e1e1e;
    padding: 0 8px;
  }
`;
