import React, {FC} from 'react';
import {IComment} from "../types/comment";
import {Card} from "react-bootstrap";
import cl from "./styles/PostItem.module.scss";

interface CommentItemProps {
    comment: IComment
}

const CommentItem: FC<CommentItemProps> = (comment) => {


    return (

        <Card bg='white' text={"dark"} className={cl.card}>
            <Card.Body>
                {comment.comment.name ?
                    <Card.Title>{comment.comment.name}</Card.Title> :
                    <Card.Title>Текст названия отсутствует</Card.Title>
                }
                {comment.comment.body ?
                    <Card.Text>{comment.comment.body}</Card.Text> :
                    <Card.Text>Текст коментария отсутствует</Card.Text>
                }
                {comment.comment.email ?
                    <Card.Footer>{comment.comment.email}</Card.Footer> :
                    <Card.Footer>Отправитель неизвестен</Card.Footer>
                }


            </Card.Body>
        </Card>

    );
};

export default CommentItem;