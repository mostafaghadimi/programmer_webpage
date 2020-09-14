import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import Profile from './components/profile/profile';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/">
                    hey
                </Route>
            </Router>
        )
    }
}
