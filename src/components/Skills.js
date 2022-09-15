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
    div{
        border: 1px solid black;
    }
    .a {
        grid-column: 1/3;
        grid-row: 1/3;
    }
    .d {
        grid-column-start: 1;
        grid-column-end: 3;
    }
    .e {
        grid-column-start: 1;
        grid-column-end: 3;
    }
`
const Skill = styled.div`
    border: 2px solid black;
`
const Skills = () => {
  return (
    <Container>
        <div className="a">Graphic Design</div>
        <div className="b">UI/UX</div>
        <div className="c">Apps</div>
        <div className="d">Illustrations</div>
        <div className="e">Photography</div>
    </Container>
  )
}
export default Skills;