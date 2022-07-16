import {FC, useEffect, useState} from "react";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {IUser} from "../types/user";
import UserService from "../API/UserService";
import {useNavigate} from "react-router-dom";
import cl from "./styles/PostItem.module.scss";
import {Container} from "react-bootstrap";

interface PostBlockProps{
    id:number
}

const PostBlock:FC<PostBlockProps>=({id})=>{
    const navigate = useNavigate()
    const{post,loading,error}=useTypedSelector(state=> state.post)
    const{fetchPost}=useActions()
    const [user, setUser] = useState<IUser>()
    async function fetching(userId:any) {
        try {
            const response = await UserService.getUserById(userId)
            setUser(response)
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(()=> {
        fetchPost(id)
    },[])
    useEffect(()=> {

        if(post.userId!=0){
            fetching(post.userId).then()
        }
    },[post.userId])


    useEffect(()=>{
    },[loading])
    return(
        <Container className='mx-auto col-md-10 pt-3'>
            <h2>
                {post?.title}
            </h2>
            <p>
                {post?.body}
            </p>
            <p
                className={cl.card_btn}
                onClick={() => navigate('/users/' + user?.id)}>
                {user?.name}
            </p>
        </Container>
    )
}
export default PostBlock;