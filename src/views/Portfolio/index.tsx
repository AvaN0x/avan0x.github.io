import React from 'react';
import { ViewContainer } from '../../App';

import { useFirebaseConnect } from 'react-redux-firebase';

import Lang, { LangString } from '../../components/Lang/Lang';
import LangsList from '../../components/Lang/LangsList';

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
                <HashLink smooth to="#about"><Lang name={LangsList.about} /></HashLink>
                <HashLink smooth to="#projects"><Lang name={LangsList.projects} /></HashLink>
                <HashLink smooth to="#contact"><Lang name={LangsList.contact} /></HashLink>
            </NavBar>

            <Cover url={"https://wallpaperaccess.com/full/521099.jpg"} >
                <p><Lang name={LangsList.portfolio_cover_subtitle} /></p>
                <h1>Clément RICATTE</h1>
            </Cover>

            <ColoredSection title={LangString(LangsList.about)} id="about" />
            <About />

            <ColoredSection title={LangString(LangsList.projects)} id="projects" />
            <Projects />

            <ColoredSection title={LangString(LangsList.contact)} id="contact" />
            <Contact />
        </ViewContainer>
    );
}

export default Portfolio;