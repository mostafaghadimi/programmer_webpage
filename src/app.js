import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import InfoLS from './components/info/info-ls';

export default class App extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/">
                    <InfoLS/>
                </Route>
            </Router>
        )
    }
}
