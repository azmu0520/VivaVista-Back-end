import React, { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, useLocation, Outlet } from 'react-router-dom';
import { data } from '../../utilits/navbar';
import { Wrapper, Wrap, Container, Icon } from './style';
import cart from '../../assets/icons/cart.svg';

const Navbar = () => {
  const [state, setState] = useState(false);
  let location = useLocation();
  const handle = () => {
    setState(!state);
  };

  return (
    <>
      <Wrapper>
        <Wrap>
          <NavLink to='/'>
            <Wrap.Icon src='https://online.pdp.uz/assets/icons/newPdpLogo.svg' />
          </NavLink>
          <NavLink to='/' className={'link__text'}>
            <img
              src='https://online.pdp.uz/assets/icons/pdpuz-menu.svg'
              alt='menu'
            />
            <span>Kurslarimiz</span>
          </NavLink>
          <Wrap.NavLinks>
            <NavLink to='/'>Qo'llanma</NavLink>
            <NavLink className={'link__unicorn'} to='/'>
              Unicorn
            </NavLink>
          </Wrap.NavLinks>
          <Wrap.NavLinks className='link__text'>
            <img
              src='https://online.pdp.uz/assets/newPdp/icons/enter.svg'
              alt=''
            />
            <span>Kirish</span>
          </Wrap.NavLinks>
          {/* {data.map((item) => (
          <Container key={item.id} color={location.pathname == item.path}>
          <NavLink to={item.path}>{item.title}</NavLink>
          </Container>
        ))} */}
        </Wrap>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Navbar;
