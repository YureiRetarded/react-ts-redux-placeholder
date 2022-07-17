import React, {FC} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import UserInfo from "./UserInfo";
import UserAlbums from "./UserAlbums";
import UserPosts from "./UserPosts";

interface UserContentProps {
    userId: number
}

const UserContent: FC<UserContentProps> = ({userId}) => {
    const {window} = useTypedSelector(state => state.userWindow)

    if (window === 'info') {
        return (
            <UserInfo/>
        )
    } else if (window === 'albums') {
        return (
            <UserAlbums/>
        )
    } else
        return (
            <UserPosts userId={userId}/>
        );

};

export default UserContent;