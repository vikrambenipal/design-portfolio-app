import React from 'react'
import styled from 'styled-components';
import theme from '../theme';
import patternApps from '../assets/pattern-apps.svg';
import patternGraphicDesign from '../assets/pattern-graphic-design.svg';
import patternIllustrations from '../assets/pattern-illustrations.svg';
import patternPhotography from '../assets/pattern-photography.svg';
import patternUIUX from '../assets/pattern-ui-ux.svg';
import patternMotionGraphics from '../assets/pattern-motion-graphics.svg';

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
    position: relative;
`
const Img = styled.img`
    position: absolute;
    right: 24px;
    top: 24px;
`
const Title = styled.p`
    position: absolute;
    left: 24px;
    bottom: 12px;
    color: white;
    font-family: PlusJakartaSansBold;
    font-size: 24px;
`
const Skills = () => {
  return (
    <Container>
        <Skill className="g">
            <Img src={patternGraphicDesign} alt="" />
            <Title>Graphic Design</Title>
        </Skill>
        <Skill className="u">
            <Img src={patternUIUX} alt="" />
            <Title>UI/UX</Title>
        </Skill>
        <Skill className="a">
            <Img src={patternApps} alt="" />
            <Title>Apps</Title>
        </Skill>
        <Skill className="i">
            <Img src={patternIllustrations} alt="" />
            <Title>Illustrations</Title>
        </Skill>
        <Skill className="p">
            <Img src={patternPhotography} alt="" />
            <Title>Photography</Title>
        </Skill>
        <Skill className="m">
            <Img src={patternMotionGraphics} alt="" />
            <Title>Motion Graphics</Title>
        </Skill>
    </Container>
  )
}
export default Skills;