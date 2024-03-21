import React, { Component } from "react";
import { createRoot } from 'react-dom/client';
import {
    BrowserRouter as Router,
    Routes, Route, Link, Redirect
} from "react-router-dom";
import HomePage from "./HomePage";
import BaseVotePage from "./VotePage/BaseVotePage"

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return <Router>
            <Routes>
                <Route exact path="/" Component={HomePage}></Route>
                <Route exact path="/vote" Component={BaseVotePage}></Route>
            </Routes>
        </Router>;
    }
};

const appDiv = document.getElementById("app");
const root = createRoot(appDiv);
root.render(<App/>);
