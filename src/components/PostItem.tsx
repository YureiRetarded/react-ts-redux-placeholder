import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../types/post";
import {Card} from "react-bootstrap";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import post from "../pages/Post";
import {IUser} from "../types/user";
import FetchingUserService from "../API/UserService";
import axios from "axios";
import UserService from "../API/UserService";

interface PostItemProps {
    post: IPost
}

const PostItem: FC<PostItemProps> = (post) => {

    const [user,setUser]=useState<IUser>()
    async function fetching(){
        try{
            const response=await UserService.getUserById(post.post.userId)
            setUser(response)
        }
        catch (e){
            console.log(e)
        }
    }
    useEffect(()=>{
       fetching().then()
    },[])

    return (
        <Card bg='dark' text={"white"}>
            <Card.Body>
                <Card.Title>№{post.post.id} {post.post.title}</Card.Title>
                <Card.Text>
                    {post.post.body}
                </Card.Text>
                <Card.Footer>
                    {user?.name}
                </Card.Footer>

            </Card.Body>
        </Card>

    );
};

export default PostItem;