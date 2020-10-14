import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Skeleton from '../Skeleton';

const Card = styled.div`
    display:flex;
    justify-content: center;
    padding:10px;
    width:90px;
    height: 90px;
    border-radius: 6px;
    background-image:url(${(props) => props.photo});
    background-size:cover;
    box-sizing:border-box;
`;

const Title = styled.span`
    font-family: ${(props) => props.theme.fonts.regular};
    color: #FFFFFF;
    font-size:16px;
`;

const ImageCard = ({ photo, title }) => {
    
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        const imageLoader = new Image(); /*Image Tag */
        imageLoader.src = photo;
        imageLoader.onload = () => setImageLoaded(true);
    }, [photo]); 

    return(
        <> 
        {imageLoaded ? (
                <Card photo={photo}>
                    <Title>{title}</Title>
                </Card>
            ) : (<Skeleton width="100px" height="100px"/>)
        }
        </>
            );
    };
export default ImageCard;