import React from 'react';
import {Container, Image} from "react-bootstrap";
import duck from '../assets/duck.gif'

const Duck = () => {
    return (
        <Container className='p-0 mx-auto d-flex justify-content-center'>
            <Image src={duck} alt="Not found"/>
        </Container>
    );
};

export default Duck;