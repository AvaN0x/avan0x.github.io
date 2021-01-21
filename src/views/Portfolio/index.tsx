import React from 'react';

import { NavLink } from 'react-router-dom';
import ColoredSection from '../../components/ColoredSection';
import Cover from '../../components/Cover';
import NavBar from '../../features/NavBar';

import About from './About';

const Portfolio = () => {
    return (
        <>
            <NavBar>
                <NavLink to="/#about">About</NavLink> {/* // TODO not working */}
                <NavLink to="/#portfolio">Portfolio</NavLink> {/* // TODO not working */}
                <NavLink to="/#contact">Contact</NavLink> {/* // TODO not working */}
            </NavBar>

            <Cover url={"https://wallpaperaccess.com/full/521099.jpg"} >
                <p>Développeur</p>
                <h1>Clément RICATTE</h1>
            </Cover>

            <ColoredSection title="A propos" id="#about" />
            <About />

            <ColoredSection title="Portfolio" id="#portfolio" />


            <ColoredSection title="Contact" id="#contact" />

        </>
    );
}

export default Portfolio;