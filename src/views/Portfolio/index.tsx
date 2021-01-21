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
                <a href="#about">About</a>
                <a href="#portfolio">Portfolio</a>
                <a href="#contact">Contact</a>
            </NavBar>

            <Cover url={"https://wallpaperaccess.com/full/521099.jpg"} >
                <p>Développeur</p>
                <h1>Clément RICATTE</h1>
            </Cover>

            <ColoredSection title="A propos" id="about" />
            <About />

            <ColoredSection title="Portfolio" id="portfolio" />


            <ColoredSection title="Contact" id="contact" />

        </>
    );
}

export default Portfolio;