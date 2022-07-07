import React, {FC, useEffect, useState} from 'react';
import {IPost} from "../types/post";
import {Card} from "react-bootstrap";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import post from "../pages/Post";

interface PostItemProps {
    post: IPost
}

const PostItem: FC<PostItemProps> = (post) => {
    //console.log(post.post.id)
    //console.log(users[0])
    return (
        <Card bg='dark' text={"white"}>
            <Card.Body>
                <Card.Title>{post.post.title}</Card.Title>
                <Card.Text>{post.post.body}</Card.Text>
                {post.post.userId}
            </Card.Body>
        </Card>

    );
};

export default PostItem;