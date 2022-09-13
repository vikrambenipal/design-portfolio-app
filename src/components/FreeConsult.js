import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const Button = styled.button`
    border-radius: 50px;
    width: 220px;
    height: 56px;
    border: none;
    color: ${theme.white ? theme.white : "#FFFFFF"};
    background-color: ${props => props.color ? props.color : theme.black};
    :hover{
        background-color: ${props => props.hoverColor ? props.hoverColor : theme.black};
    }
    font-family: PlusJakartaSansBold;
    font-size: 14px;
    cursor: pointer;
`
const FreeConsult = ({ color, hoverColor }) => {
  return (
    <div>
        <Button color={color} hoverColor={hoverColor}>Free Consultation</Button>
    </div>
  )
}
export default FreeConsult;