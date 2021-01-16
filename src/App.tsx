import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import styled from '@emotion/styled';

import './App.css';

import NotFound from "./views/Errors/NotFound";
import Home from './views/Home';

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    );
}

export default App;
