import React, {FC, useEffect, useRef} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {Container, Spinner, Stack} from "react-bootstrap";
import cl from "./styles/PostList.module.scss";
import UserItem from "./UserItem";

const UsersList: FC = () => {
    const {users, loading, error, totalCount, totalPage, page, limit} = useTypedSelector(state => state.users)
    const {fetchUsers, setUserPage} = useActions()
    const observer = useRef<IntersectionObserver>();
    const targetRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        fetchUsers(limit, page)
    }, [page])

    useEffect(() => {
        if (loading) return
        if (observer.current) observer.current?.disconnect()
        let callback = function (entries: any, observer: any) {
            if (entries[0].isIntersecting && page < totalPage) {
                setUserPage(page + 1)
            }
        };
        observer.current = new IntersectionObserver(callback);
        observer.current?.observe(targetRef.current as Element)

    }, [loading])

    return (
        <Container className='p-0'>
            <Stack gap={3} className='col-md-12 mx-auto pt-3'>
                {users.map(user =>
                    <UserItem key={user.id} user={user}/>
                )}

                {!loading || page == totalPage ? <div className={cl.observer} ref={targetRef}/> :
                    <div className={cl.FooterPostsCircle}><Spinner animation='border'/></div>
                }
                {totalPage == page ? <div className={cl.FooterPosts}>Users ended</div> : null}
            </Stack>
        </Container>

    );

};

export default UsersList;