import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import FreeConsult from './FreeConsult';
import logo from '../assets/logo.svg';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    img {
        width: 48px;
        pointer: cursor;
    }
`
const Nav = () => {
  return (
    <Container>
        <img src={logo} alt=""/>
        <FreeConsult color={theme.black} hoverColor={theme.blue}/>
    </Container>
  )
}
export default Nav;