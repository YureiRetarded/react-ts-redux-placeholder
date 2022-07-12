import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../types/post";
import {Card} from "react-bootstrap";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import post from "../pages/Post";
import {IUser} from "../types/user";

interface PostItemProps {
    post: IPost
}

const PostItem: FC<PostItemProps> = (post) => {
    useEffect(()=>{

    },[])
    return (
        <Card bg='dark' text={"white"}>
            <Card.Body>
                <Card.Title>{post.post.id} {post.post.title}</Card.Title>
                <Card.Text>{post.post.body}</Card.Text>
                {/*{user.name}*/}
            </Card.Body>
        </Card>

    );
};

export default PostItem;