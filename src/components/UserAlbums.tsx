import React, {FC} from 'react';
import AlbumsList from "./AlbumsList";

interface UserPostsProps {
    userId: number
}

const UserAlbums: FC<UserPostsProps> = ({userId}) => {
    return (
        <AlbumsList userId={userId}/>
    );
};

export default UserAlbums;