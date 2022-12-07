import styled, { css } from 'styled-components';
import { ReactComponent as Cart } from '../../assets/icons/cart.svg';

const center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 110px;
  z-index: 106;
  .fixed-top {
    height: 100px;
    box-shadow: 0 2px 9px rgb(0 0 0 / 4%);
  }
  background-color: #fff;
`;

export const Wrap = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr 0.5fr;
  max-width: 1140px;
  width: 100%;
  margin: 0 auto;
  z-index: 106;

  .link__text {
    display: flex;
    align-items: center;
    font-family: 'Sfpro-Bold' !important;
    font-size: 16px !important;
    color: #000;
    text-decoration: none;
    img {
      margin-right: 1rem !important;
    }
  }
`;

Wrap.Icon = styled.img`
  width: 181px;
`;

Wrap.NavLinks = styled.div`
  display: flex;
  align-items: center;
  a {
    color: #898989;
    transition: all 0.15s linear;
    /* padding-bottom: 7px; */
    font-family: 'Sfpro-Regular';
    text-decoration: none;
    border-bottom: 3px solid transparent;
  }
  .link__unicorn {
    margin-left: 23px;
  }
`;

export const Container = styled.div`
  color: var(--color) !important;

  /* color: ${({ color }) => (color ? 'red' : 'black')}; */
  a {
    color: inherit;
  }
  /* ${center} */
`;

export const Icon = styled.div`
  ${center}
`;

Icon.Cart = styled(Cart)`
  path {
    stroke: ${({ state }) => (state ? 'red' : 'blue')};
  }
`;
