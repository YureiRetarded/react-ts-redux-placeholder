import React, {FC, useEffect} from 'react';
import {useActions} from "../hooks/useActions";
import {useNavigate, useParams} from "react-router-dom";
import {Container} from "react-bootstrap";
import UserBlock from "../components/UserBlock";
import {checkInputId} from "../utils/checking";
import PostBlock from "../components/PostBlock";
import PostCommentList from "../components/PostCommentList";
import UserContent from "../components/UserContent";

const User: FC = () => {
    const {clearUser}=useActions()
    clearUser()
    window.scrollTo(0,0)
    const {id} = useParams();
    const navigate = useNavigate()
    useEffect(()=>{
        if(checkInputId(id)=='incorrect')
            navigate('/users/not_found_user')
    },[])
    if(checkInputId(id)!='incorrect'){
        return (
            <div>
                <UserBlock userId={parseInt(id||'1')}/>
                <UserContent userId={parseInt(id||'1')}/>
            </div>
        )}
    return(
        <div>Ошибка при отображение поста</div>
    )
};

export default User;