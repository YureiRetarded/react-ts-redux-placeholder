import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./router";
import {Container} from "react-bootstrap";
import cl from './styles/AppRouter.module.scss'

const AppRouter: FC = () => {
    return (
        <div className={cl.wrapperPages}>
            <Container>
                <Routes>
                    {publicRoutes.map(route =>
                        <Route path={route.path} element={route.element} key={route.path}/>)
                    }
                </Routes>
            </Container>
        </div>
    );
};

export default AppRouter;