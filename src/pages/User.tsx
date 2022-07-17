import React, {FC, useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import {useNavigate, useParams} from "react-router-dom";
import {Container} from "react-bootstrap";

const User: FC = () => {
    const {clearUser}=useActions()
    clearUser()
    window.scrollTo(0,0)
    const {id} = useParams();
    const navigate = useNavigate()
    return (
        <Container>
            <h1>Текст</h1>
        </Container>

    );
};

export default User;