import React, { useState } from 'react';
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
    overflow: hidden;
    .active{
        margin: 0 20px;
    }
`
const Inner = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    transform: ${props => `translate(${props.index}%)`};
    transition: transform 0.3s;
`
const Img = styled.img`
    width: ${props => props.width}%;
    border-radius: 15px;
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
    margin-top: 32px;
`
const Slider = () => {
  
    const [activeIndex, setActiveIndex] = useState(0);
    const images = [slide1,slide2,slide3,slide4,slide5];
    const imageWidth = 70;
    const half = Math.floor(images.length/2) * imageWidth;

    const handleRight = () => {
        setActiveIndex((activeIndex + 1) % images.length);
    }
    const handleLeft = () => {
        setActiveIndex((((activeIndex-1) % images.length) + images.length) % images.length);
    }
    console.log(activeIndex)

  return (
    <Container>
        <SlideContainer>
            <Inner index={-(activeIndex * imageWidth) + half}>
                {images.map((image,index) => {
                    return <Img className={index === activeIndex ? "active" : ""}width={imageWidth} src={image} alt=""/>
                })}
            </Inner>
        </SlideContainer>
        <ArrowContainer>
            <Arrow onClick={handleLeft} className="left" src={iconLeft} alt=""/>
            <Arrow onClick={handleRight} className="right" src={iconRight} alt=""/>
        </ArrowContainer>
    </Container>
  )
}
export default Slider;