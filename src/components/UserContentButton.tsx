import React, {FC} from 'react';
import {Button, ButtonGroup} from "react-bootstrap";
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";

const UserContentButton: FC = () => {
    const {window} = useTypedSelector(state => state.userWindow)
    const {setWindow, setDefault, clearAllPosts, clearAllAlbums} = useActions()
    return (
        <ButtonGroup className='w-100 pt-3 pb-3'>
            <Button onClick={() => {
                if (window !== 'posts') {
                    clearAllPosts()
                    setWindow('posts')
                }
            }} variant="outline-primary">Posts</Button>
            <Button onClick={() => {
                if (window !== 'albums') {
                    clearAllAlbums()
                    setWindow('albums')
                }
            }} variant="outline-primary">Albums</Button>
            <Button onClick={() => {
                if (window !== 'info') {
                    setWindow('info')
                }

            }} variant="outline-primary">Info</Button>
        </ButtonGroup>
    );
};

export default UserContentButton;