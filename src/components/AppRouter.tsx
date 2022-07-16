import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "./router";
import {Container} from "react-bootstrap";

const AppRouter: FC = () => {
    return (
        <Container>
            <Routes>
                {publicRoutes.map(route =>
                    <Route path={route.path} element={route.element} key={route.path}/>)
                }
            </Routes>
        </Container>
    );
};

export default AppRouter;