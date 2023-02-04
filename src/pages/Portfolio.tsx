import React from 'react';

import Lang, { LangString } from 'components/Lang/Lang';
import LangsList from 'components/Lang/LangsList';

import ColoredSection from 'components/ColoredSection';
import Cover from 'components/Cover';

import NavBar from 'components/layout/NavBar';
import { HashLink } from 'react-router-hash-link';
import About from 'components/portfolio/About';
import Projects from 'components/portfolio/Projects';
import Contact from 'components/portfolio/Contact';

const Portfolio = (): JSX.Element => {
    return (
        <>
            <NavBar>
                <HashLink to="#about">
                    <Lang name={LangsList.about} />
                </HashLink>
                <HashLink to="#projects">
                    <Lang name={LangsList.projects} />
                </HashLink>
                <HashLink to="#contact">
                    <Lang name={LangsList.contact} />
                </HashLink>
            </NavBar>

            <Cover url={'https://wallpaperaccess.com/full/521099.jpg'}>
                <p>
                    <Lang name={LangsList.portfolio_cover_subtitle} />
                </p>
                <h1>Clément RICATTE</h1>
            </Cover>

            <ColoredSection title={LangString(LangsList.about)} id="about" />
            <About />

            <ColoredSection
                title={LangString(LangsList.projects)}
                id="projects"
            />
            <Projects />

            <ColoredSection
                title={LangString(LangsList.contact)}
                id="contact"
            />
            <Contact />
        </>
    );
};

export default Portfolio;
