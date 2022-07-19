import React from 'react';
import {Container} from "react-bootstrap";
import Duck from "../components/Duck";

const NotFoundPost = () => {
    return (
        <Container className="p-0 d-flex flex-column align-items-center">
            <Duck/>
            <h1 className="p-5">Post is not found</h1>
        </Container>
    );
};

export default NotFoundPost;