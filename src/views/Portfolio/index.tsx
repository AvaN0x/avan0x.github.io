import React from 'react';
import { NavLink } from 'react-router-dom';
import Cover from '../../components/Cover';
import NavBar from '../../features/NavBar';
import Experiences from '../../features/Portfolio/Experiences';

import logo from '../../logo.svg';

const Portfolio = () => {
    return (
        <>
            <NavBar>
                <NavLink to="/">About</NavLink>
                <NavLink to="/">Portfolio</NavLink>
            </NavBar>

            <Cover url={"https://wallpaperaccess.com/full/521099.jpg"} >
                <p>Développeur</p>
                <h1>Clément RICATTE</h1>
            </Cover>

            <Experiences />

            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.tsx</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                 </a>
                </header>
            </div>
        </>
    );
}

export default Portfolio;