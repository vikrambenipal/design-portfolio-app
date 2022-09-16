import React from 'react';
import styled from 'styled-components';
import iconLeft from '../assets/icon-arrow-left.svg';
import iconRight from '../assets/icon-arrow-right.svg';
import slide1 from '../assets/image-slide-1.jpg';
import slide2 from '../assets/image-slide-2.jpg';
import slide3 from '../assets/image-slide-3.jpg';
import slide4 from '../assets/image-slide-4.jpg';
import slide5 from '../assets/image-slide-5.jpg';

const Container = styled.div`
    
`
const SlideContainer = styled.div`
    display: flex;
    flex-direction: row;
`
const Img = styled.img`
    width: 250px;
`
const Arrow = styled.img`
    background-color: black;
    filter: invert(0%) sepia(0%) saturate(0%) hue-rotate(203deg) brightness(104%) contrast(105%);
    width: 20px;
    border-radius: 50%;
    padding: 24px;
    cursor: pointer;
`
const ArrowContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    .left{
        margin-right: 8px;
    }
    .right{
        margin-left: 8px;
    }
`
const Slider = () => {
  return (
    <Container>
        <SlideContainer>
            <Img src={slide1} alt=""/>
        </SlideContainer>
        <ArrowContainer>
            <Arrow className="left" src={iconLeft} alt=""/>
            <Arrow className="right" src={iconRight} alt=""/>
        </ArrowContainer>
    </Container>
  )
}
export default Slider;