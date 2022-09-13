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
    grid-template-columns: 171px 171px;
    grid-template-rows: auto;
    grid-template-areas: 
    "header header"
    "main sidebar"
    "footer sidebar";
    div {
        border: 2px solid black;
        flex: 0 0 50px;
    }
    .bigger{
        flex-basis: 110px;
    }
`
const Skill = styled.div`
    border: 2px solid black;
`
const Skills = () => {
  return (
    <Container>
        <div className="bigger" style={{ gridArea: "header"}}>A</div>
        <div style={{ gridArea: "main"}}>B</div>
        <div style={{ gridArea: "sidebar"}}>C</div>
        <div style={{ gridArea: "footer"}}>D</div>
    </Container>
  )
}
export default Skills;