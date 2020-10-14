import styled from 'styled-components';

import Slider from 'react-slick'

/*Styling native components = styled.component
    Styling other components = styled(component)*/

export const Wrapper = styled.div`
    display:flex;
    flex-direction: row;
`;
export const Container = styled.aside`
    background-color: ${(props) => props.theme.colors.background};
    width:360px;
    height:100vh;
    overflow-y:scroll;
`;

export const Search = styled.section`
    display:flex;
    flex-direction: column;
    justify-content: center;
    background-color:#fff;
    padding:16px;
`;

export const Logo = styled.img`
    margin-bottom: 15px;

`;

export const Map = styled.div`
    background-color:red;
    width:500px;
    height:100vh;
`;

/*Adding space between carousel items*/
export const Carousel = styled(Slider)`
    .slick-slide {
        margin-right:30px;
    }
`;

 
export const CarouselTitle = styled.h1`
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    font-size: 24px;
    font-weight: bold;
    line-height: 29px;
    margin: 16px 0;
`;

export const ModalTitle = styled.p`
    margin-bottom: 10px;
    letter-spacing:0.11px;
    font-family: ${(props) => props.theme.fonts.regular};
    color: ${(props) => props.theme.colors.text};
    text-transform: none;
    line-height: 29px;
    font-size:24px;
    font-weight:bold;
`;

export const ModalContent = styled.p`
margin-bottom: 10px;
font-family: ${(props) => props.theme.fonts.regular};
color: ${(props) => props.theme.colors.text};
font-weight: normal;
text-transform: none;
font-size: 16px;
`;

