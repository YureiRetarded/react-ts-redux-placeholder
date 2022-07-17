import React, {FC, useEffect, useState} from 'react';
import {Button, ButtonGroup, Container} from "react-bootstrap";
interface UserContentProps{
    userId:number
}
const UserContent:FC<UserContentProps> = ({userId}) => {
    let pageType=0;
    useEffect(()=>{
        const setPageType=(type:number)=>{
            console.log(type)
            pageType=type
        }
    },[pageType])

    return (
        <Container className='mx-auto col-md-10 pt-3'>
            <ButtonGroup className='col-md-12'>
                <Button onClick={()=>{console.log(1)}} variant="outline-primary">Posts</Button>
                <Button onClick={()=>{console.log(1)}} variant="outline-primary">Albums</Button>
                <Button onClick={()=>{console.log(1)}} variant="outline-primary">Info</Button>
            </ButtonGroup>
            {pageType}
        </Container>
    );
};

export default UserContent;