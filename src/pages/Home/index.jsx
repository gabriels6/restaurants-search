import React, { useState }from 'react';
import Slider from "react-slick";
import { useSelector } from 'react-redux';
import TextField, { Input } from '@material/react-text-field'; //textfield library
import MaterialIcon from '@material/react-material-icon'; //icons library

import logo from '../../assets/logo.svg';

import { Container,Search, Carousel ,Logo, Wrapper, CarouselTitle, ModalTitle, ModalContent } from './styles';

import restaurant from '../../assets/restaurante-fake.png'
import { Card, RestaurantCard, Modal, Map, Loader, Skeleton } from '../../components';


const Home = () => {

    const [ inputValue, setInputValue ] = useState('');
    const [ query, setQuery] = useState(null);

    const [placeId, setPlaceId] = useState(null);

    const {restaurants,restaurantSelected } = useSelector((state) => state.restaurants);
    const [modalOpened, setModalOpened ] = useState(false); 

    var settings = {
        dots: false,
        infinite: true,
        autoplay:true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        adaptiveHeight: true,
      };

      function handleKeyPress(e){
        if(e.key === 'Enter'){
            setQuery(inputValue);
        }
      }

      /*Open Modal */
      function handleOpenModal(placeId){
          setPlaceId(placeId);
          setModalOpened(true);
      }



return(
<Wrapper>
    <Container>
        <Search>
            <Logo src = {logo} alt="Restaurant logo" />
                <TextField
                label='Search for Restaurants'
                outlined
                //onTrailingIconSelect={() => this.setState({value: ''})}
                trailingIcon={<MaterialIcon role="button" icon="search"/>}>
                        <Input
                        value={inputValue}
                        onKeyPress = {handleKeyPress}
                        onChange={(e) => setInputValue(e.target.value)} />
                </TextField> {/*Search Field*/}
                {restaurants.length > 0 ? (
                    <>
                        <CarouselTitle>Na sua Área</CarouselTitle>
                        <Carousel {...settings}>
                        {restaurants.map((restaurant) => 
                            <Card 
                            photo = {restaurant.photos ? restaurant.photos[0].getUrl(): restaurant} 
                            title={restaurant.name}/>)
                            }
                        </Carousel>
                    </>
                ) : (
                    <Loader />
                )};
                
        </Search>
        {restaurants.map((restaurant) => <RestaurantCard  onClick={() => handleOpenModal(restaurant.place_id)}key={restaurant.place_id} restaurant={restaurant}/>)}
    </Container>
    <Map query={query} placeId={placeId}/>
    <Modal open={modalOpened} onClose={() => setModalOpened(!modalOpened)}>
        {restaurantSelected ? (
            <>
                <ModalTitle>{restaurantSelected?.name}</ModalTitle>
                <ModalContent>{restaurantSelected?.formatted_phone_number}</ModalContent>
                <ModalContent>{restaurantSelected?.formatted_address}</ModalContent>
                <ModalContent>{restaurantSelected?.opening_hours?.open_now ? 'Open now :)' : 'Closed right now :('}</ModalContent>
            </>
        ) : (
            <>
                <Skeleton width="10px" height="10px" />
                <Skeleton width="10px" height="10px" />
                <Skeleton width="10px" height="10px" />
                <Skeleton width="10px" height="10px" />
            </>
        )}
        
    </Modal>
</Wrapper>
);
};


export default Home;