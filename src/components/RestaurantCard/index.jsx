import React, { useState } from 'react';
import ReactStars from "react-rating-stars-component";

import restaurantPhoto from '../../assets/restaurante-fake.png';
import Skeleton from '../Skeleton';

import { Restaurant, RestaurantInfo, RestaurantPhoto,Title, Address } from './styles'

const RestaurantCard = ({ restaurant,onClick }) =>{ 

    const [imageLoaded, setImageLoaded] = useState(false);

    
    return(
        <Restaurant onClick={onClick}>
            <RestaurantInfo>
                <Title>{restaurant.name}</Title>
                <ReactStars count={5} isHalf value = {restaurant.rating} edit={false} activeColor="#e7711c"/>
                <Address>{restaurant.vicinity || restaurant.formatted_address}</Address>
            </RestaurantInfo>
            <RestaurantPhoto
            imageLoaded={imageLoaded} 
            src={restaurant.photos ? restaurant.photos[0].getUrl() : restaurantPhoto} 
            onLoad={() => setImageLoaded(true)}
            alt="Restaurant Photo"/>
            {!imageLoaded && <Skeleton width="100px" height="100px" />}
        </Restaurant>
    );

};

export default RestaurantCard;