import React from 'react';
import { NavLink, useLocation, Outlet } from 'react-router-dom';
import { data } from '../../utilits/sidebar';
import { user } from '../../utilits/userInfo';
import GenericBtn from '../Generic/Button';

import {
  Wrapper,
  Sidebar,
  Body,
  MainLogo,
  IconWrap,
  Links,
  Link,
  Navbar,
  UserControllers,
  BalanceWrap,
  Icon,
  UserInfo,
} from './style';

export default function Sidebarr() {
  let location = useLocation();

  return (
    <Wrapper>
      <Sidebar>
        <NavLink to='/'>
          <IconWrap>
            <MainLogo />
          </IconWrap>
        </NavLink>
        <Links>
          {data?.map(({ title, Icon: Icons, path }) => (
            <Link to={path} active={path === location.pathname}>
              <Icons className='icon' /> {title}
            </Link>
          ))}
        </Links>
      </Sidebar>
      <Body>
        <Navbar>
          <UserInfo>
            <h2>
              {user.status} {user.fullname}
            </h2>
            <span>{user.candidateNumber}</span>
          </UserInfo>
          <UserControllers>
            <BalanceWrap>
              <Icon.Balance />
              <div className='text-wrap'>
                <h5>Ваш баланс:</h5>
                <span>{user.balance}сум</span>
              </div>
            </BalanceWrap>
            <GenericBtn width={'160px'} height='36px'>
              Активировать тариф
            </GenericBtn>
            <Icon.Notify />
            <Icon.Question />
            <Icon.Setting />
          </UserControllers>
        </Navbar>
        <Outlet />
      </Body>
    </Wrapper>
  );
}
