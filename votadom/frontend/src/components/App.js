import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes, Route, Link, Redirect
} from "react-router-dom";
import HomePage from "./HomePage";

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <Router>
            <Routes>
                <Route exact path="/" Component={HomePage}></Route>
            </Routes>
        </Router>;
    }
};

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App/>);
