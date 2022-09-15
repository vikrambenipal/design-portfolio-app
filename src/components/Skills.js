import React from 'react'
import styled from 'styled-components';
import theme from '../theme';
import patternApps from '../assets/pattern-apps.svg';
import patternGraphicDesign from '../assets/pattern-graphic-design.svg';
import patternIllustrations from '../assets/pattern-illustrations.svg';
import patternPhotography from '../assets/pattern-photography.svg';
import patternUIUX from '../assets/pattern-ui-ux.svg';

const Container = styled.div`
    display: grid;
    justify-content: center;
    grid-template-columns: 200px 200px;
    grid-auto-rows: 182px;
    grid-gap: 24px;     
    div {
        border-radius: 15px;
    } 
    .g {
        grid-column: 1/3;
        grid-row: 1/3;
        background-color: ${theme.blue};
    }
    .u {
        background-color: ${theme.orange};
    }
    .a {
        background-color: ${theme.pink};
    }
    .i {
        grid-column-start: 1;
        grid-column-end: 3;
        background-color: ${theme.red};
    }
    .p {
        grid-column-start: 1;
        grid-column-end: 3;
        background-color: ${theme.green};
    }
    .m {
        grid-column-start: 1;
        grid-column-end: 3;
        background-color: ${theme.purple};
    }
`
const Skill = styled.div`
    border: 2px solid black;
`
const Skills = () => {
  return (
    <Container>
        <div className="g">Graphic Design</div>
        <div className="u">UI/UX</div>
        <div className="a">Apps</div>
        <div className="i">Illustrations</div>
        <div className="p">Photography</div>
        <div className="m">Motion Graphics</div>
    </Container>
  )
}
export default Skills;