import React from 'react';
import {Container} from "react-bootstrap";
import Duck from "../components/Duck";

const NotFoundUser = () => {
    return (
        <Container className="p-0 d-flex flex-column align-items-center">
            <Duck/>
            <h1 className="p-5">User is not found</h1>
        </Container>
    );
};

export default NotFoundUser;