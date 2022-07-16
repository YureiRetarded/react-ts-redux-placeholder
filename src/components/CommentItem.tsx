import React, {FC} from 'react';
import {IComment} from "../types/comment";

interface CommentItemProps{
    comment:IComment
}

const CommentItem:FC<CommentItemProps> = (comment) => {



    return (
        <div>
            {comment.comment.id}
        </div>
    );
};

export default CommentItem;