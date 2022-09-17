import React from 'react';
import styled from 'styled-components';
import theme from '../theme';
import FreeConsult from './FreeConsult';
import profile from '../assets/image-amy.webp';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        width: 70%;
    }
    p {
        color: ${theme.brown};
        line-height: 28px;
        margin-bottom: 32px;
    }
`
const About = () => {
  return (
    <Container>
        <img src={profile} alt="" />
        <div>
            <h2>I'm Amy, and I'd love to work on your next project</h2>
            <p>I love working with others to create beautiful design solutions. 
            I've designed everything from brand illustrations to complete mobile apps. 
            I'm also handy with a camera!
            </p>
            <FreeConsult color={theme.red} hoverColor={theme.orange}/>
        </div>
    </Container>
  )
}
export default About;