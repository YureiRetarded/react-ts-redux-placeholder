import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, HashRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavbarReact from "./components/UI/NavbarReact/NavbarReact";

function App() {
    return (
        <HashRouter>
            <NavbarReact/>
            <AppRouter/>
        </HashRouter>
    );
}

export default App;
