import React from 'react';

import firebase from "firebase/app";
import "firebase/database";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import { firebaseConfig } from './firebase/config';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import './App.css';

import NotFound from "./views/Errors/NotFound";
import Portfolio from './views/Portfolio';
import Discord from './views/Discord';
import Footer from './features/Footer';
import styled from '@emotion/styled';

const PageContainer = styled.div`
    min-height: 100vh;
`;

const Redirect = (link: string) => {
    window.location.href = link;
    return null;
}

const App = (): JSX.Element => {
    return (
        <Router>
            <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
                <PageContainer>
                    <Switch>
                        <Route exact path='/' component={Portfolio} />
                        <Route exact path='/discord' component={Discord} />

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
            </FirebaseDatabaseProvider>
        </Router>
    );
}

export default App;
