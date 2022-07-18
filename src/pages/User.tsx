import React, {FC, useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import {useNavigate, useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import UserBlock from "../components/UserBlock";
import {checkInputId} from "../utils/checking";
import PostBlock from "../components/PostBlock";
import PostCommentList from "../components/PostCommentList";
import UserContentButton from "../components/UserContentButton";
import UserContent from "../components/UserContent";

const User: FC = () => {
    const {clearUser, setDefault, clearAllPosts,clearAllAlbums} = useActions()
    clearAllPosts()
    clearUser()
    setDefault()
    clearAllAlbums()

    const {id} = useParams();
    const navigate = useNavigate()
    useEffect(() => {
        if (checkInputId(id) == 'incorrect')
            navigate('/users/not_found_user')
    }, [])
    if (checkInputId(id) != 'incorrect') {
        return (
            <Container className='col-md-12 mx-auto pt-3'>
                <UserBlock userId={parseInt(id || '1')}/>
                <UserContentButton/>
                <UserContent userId={parseInt(id || '1')}/>
            </Container>
        )
    }
    return (
        <div>Ошибка при отображение пользователя</div>
    )
};

export default User;