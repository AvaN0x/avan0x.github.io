import React from 'react';
import Cover from '../../components/Cover';
import NavBar from '../../features/NavBar';

import logo from '../../logo.svg';

const Home = () => {
    return (
        <>
            <NavBar>

            </NavBar>

            <Cover url={"https://wallpaperaccess.com/full/521099.jpg"} >
                <p>Développeur</p>
                <h1>Clément RICATTE</h1>
            </Cover>

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

export default Home;