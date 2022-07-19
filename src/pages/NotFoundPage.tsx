import React from 'react';
import Duck from "../components/Duck";
import {Container} from "react-bootstrap";

const NotFoundPage = () => {
    return (
        <Container className="p-0 d-flex flex-column align-items-center">
            <Duck/>
            <h1 className="p-5">Page is not found</h1>
        </Container>

    );
};

export default NotFoundPage;