import React from 'react';
import { ViewContainer } from '../../App';

import { useFirebaseConnect } from 'react-redux-firebase';

import ColoredSection from '../../components/ColoredSection';
import Cover from '../../components/Cover';
import NavBar from '../../features/NavBar';
import { HashLink } from 'react-router-hash-link';

import About from '../../features/Portfolio/About';
import Contact from '../../features/Portfolio/Contact';
import Projects from '../../features/Portfolio/Projects';

const Portfolio = (): JSX.Element => {
    useFirebaseConnect([
        { type: 'value', path: 'icons', queryParams: ['orderByKey'] }
    ])

    return (
        <ViewContainer>
            <NavBar>
                <HashLink smooth to="#about">A propos</HashLink>
                <HashLink smooth to="#projects">Projets</HashLink>
                <HashLink smooth to="#contact">Contact</HashLink>
            </NavBar>

            <Cover url={"https://wallpaperaccess.com/full/521099.jpg"} >
                <p>Développeur</p>
                <h1>Clément RICATTE</h1>
            </Cover>

            <ColoredSection title="A propos" id="about" />
            <About />

            <ColoredSection title="Projets" id="projects" />
            <Projects />

            <ColoredSection title="Contact" id="contact" />
            <Contact />
        </ViewContainer>
    );
}

export default Portfolio;