import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserList from "./components/UserList";
import {BrowserRouter as Router} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavbarReact from "./components/NavbarReact/NavbarReact";

function App() {
    return (
        <Router>
            <NavbarReact/>
            <AppRouter/>
        </Router>
    );
}

export default App;
