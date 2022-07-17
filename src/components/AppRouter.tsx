import React, {FC, useEffect} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./router";
import {Container} from "react-bootstrap";
import cl from './styles/AppRouter.module.scss'

const AppRouter: FC = () => {
    return (
        <Container className={cl.wrapper}>
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.element} key={route.path}/>)
                }
            </Routes>
        </Container>
    );
};

export default AppRouter;