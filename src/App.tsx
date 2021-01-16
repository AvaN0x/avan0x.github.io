import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import NotFound from "./views/Errors/NotFound";
import Home from './views/Home';
import Footer from './features/Footer';
import styled from '@emotion/styled';

const PageContainer = styled.div`
    min-height: 100vh;
`;

const Redirect = (link: string) => {
    window.location.href = link;
    return null;
}

function App() {
    return (
        <Router>
            {/* <Navbar /> */}

            <PageContainer>
                <Switch>
                    <Route exact path='/' component={Home} />

                    {/* GitHub Pages */}
                    <Route exact path="/IUT-ProjetWeb" component={() => Redirect('https://avan0x.github.io/IUT-ProjetWeb/')} />
                    <Route exact path="/AnciensEtudiantsIUTMetz" component={() => Redirect('https://oxypomme.github.io/AnciensEtudiantsIUTMetz/')} />

                    {/* Other pages */}
                    <Route exact path="/Matchable" component={() => Redirect('https://matchable-80a41.web.app/')} />

                    {/* Error pages */}
                    <Route component={NotFound} />
                </Switch>
            </PageContainer>

            <Footer></Footer>
        </Router>
    );
}

export default App;
