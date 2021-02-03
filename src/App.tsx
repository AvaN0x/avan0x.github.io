import React from 'react';

import firebase from "firebase/app";
import "firebase/database";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import firebaseConfig from './firebase/config';

import { Route, HashRouter as Router, Switch } from 'react-router-dom';

import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion"

import { transitions, positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from './AlertTemplate';

import NotFound from "./views/Errors/NotFound";
import Portfolio from './views/Portfolio';
import Discord from './views/Discord';
import Footer from './features/Footer';
import styled from '@emotion/styled';
import { useFirebaseConnect } from 'react-redux-firebase';

const PageContainer = styled.div`
    min-height: 100vh;
`;

const Redirect = (link: string) => {
    window.location.href = link;
    return null;
}

const options = {
    position: positions.BOTTOM_RIGHT,
    transition: transitions.FADE,
    timeout: 5000,
    offset: '10px',
    containerStyle: {
        zIndex: 10000,
        bottom: 50
    }
}

const App = (): JSX.Element => {
    useFirebaseConnect([
        { type: 'value', path: 'langs', queryParams: ['orderByKey'] }
    ])

    return (
        <Router basename='/'>
            <AlertProvider template={AlertTemplate} {...options}>
                <FirebaseDatabaseProvider firebase={firebase} {...firebaseConfig}>
                    <PageContainer>
                        <AnimatePresence exitBeforeEnter>
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
                        </AnimatePresence>
                    </PageContainer>

                    <Footer></Footer>
                </FirebaseDatabaseProvider>
            </AlertProvider>
        </Router>
    );
}

export const ViewContainer = ({ children }: { children: React.ReactNode }): JSX.Element => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            {children}
        </motion.div>
    );
}

export default App;
