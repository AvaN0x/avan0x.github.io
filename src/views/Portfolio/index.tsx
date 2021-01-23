import React from 'react';
import { ViewContainer } from '../../App';

import ColoredSection from '../../components/ColoredSection';
import Cover from '../../components/Cover';
import NavBar from '../../features/NavBar';

import About from '../../features/Portfolio/About';
import Contact from '../../features/Portfolio/Contact';

const Portfolio = (): JSX.Element => {
    return (
        <ViewContainer>
            <NavBar>
                <a href="#about">About</a>
                <a href="#projects">Projets</a>
                <a href="#contact">Contact</a>
            </NavBar>

            <Cover url={"https://wallpaperaccess.com/full/521099.jpg"} >
                <p>Développeur</p>
                <h1>Clément RICATTE</h1>
            </Cover>

            <ColoredSection title="A propos" id="about" />
            <About />

            <ColoredSection title="Projets" id="projects" />


            <ColoredSection title="Contact" id="contact" />
            <Contact />
        </ViewContainer>
    );
}

export default Portfolio;