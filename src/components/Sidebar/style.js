import styled, { css } from 'styled-components';
import { ReactComponent as Logo } from '../../assets/icons/logo.svg';
import { ReactComponent as Wallet } from '../../assets/icons/wallet.svg';
import { ReactComponent as Notify } from '../../assets/icons/icon2.svg';
import { ReactComponent as Question } from '../../assets/icons/icon3.svg';
import { ReactComponent as Setting } from '../../assets/icons/tools.svg';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.div`
  display: flex;
`;

// Sidebar ================================================
const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  flex: 2.5;
  background: #0c2556;
  min-height: 100vh;
`;

const Links = styled.ul`
  a {
    text-decoration: ${(prop) => {
      console.log(prop);
    }};
  }
`;
const Link = styled(NavLink)`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  height: 56px;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  letter-spacing: 0.01em;
  color: #ffffff;
  padding-left: 24px;
  .icon {
    margin-right: 12px;
  }
  text-decoration: none;
  background-color: ${({ active }) =>
    active ? 'rgba(255, 255, 255, 0.1)' : ''};
  ::before {
    position: absolute;
    content: '';
    width: ${({ active }) => (active ? '8px' : '0')};
    height: 56px;
    background-color: #ffffff;
    left: 0;
  }
  transition: all 0.3s linear;
`;
const IconWrap = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 88px;
  border-bottom: 1px solid #243b67;
`;
const MainLogo = styled(Logo)`
  margin-left: 24px;
`;

// Navbar ================================================
const Navbar = styled.div`
  display: flex;
  align-items: center;
  height: 88px;
  box-shadow: inset 0px -1px 0px rgba(0, 0, 0, 0.08);
`;

const UserInfo = styled.div`
  padding-left: 32px;
  h2 {
    font-family: 'Roboto-Bold';
    font-size: 14px;
    line-height: 18px;
    text-transform: uppercase;
    color: #303030;
  }
  span {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
  }
`;
// Icons =============================
const Icon = styled.div``;
const icon = css`
  width: 24px;
  height: 24px;
  margin-left: 1.8rem;
`;

Icon.Balance = styled(Wallet)``;
Icon.Notify = styled(Notify)`
  ${icon}
`;
Icon.Question = styled(Question)`
  ${icon}
`;
Icon.Setting = styled(Setting)`
  ${icon}
`;
// =======================================
const UserControllers = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  margin-right: 23px;
`;
const BalanceWrap = styled.div`
  display: flex;
  align-items: center;
  margin-right: 38px;
  .text-wrap {
    margin-left: 10px;
  }
  .text-wrap h5 {
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    color: #303030;
  }
  .text-wrap span {
    font-family: 'Roboto-Bold';
    font-weight: 700;
    font-size: 18px;
    line-height: 21px;
    color: #2b63c0;
  }
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  flex: 12;
`;

export {
  Wrapper,
  Sidebar,
  UserInfo,
  Body,
  MainLogo,
  UserControllers,
  BalanceWrap,
  IconWrap,
  Links,
  Link,
  Navbar,
  Icon,
};
