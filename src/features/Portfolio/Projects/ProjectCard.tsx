import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import IProject from './IProject';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp, faExternalLinkAlt, faUser } from '@fortawesome/free-solid-svg-icons';
import LanguageComponent from '../../../components/LanguagesIcons/LanguageComponent';
import { faGithub, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { css } from '@emotion/react';
import Markdown from 'markdown-to-jsx';

import Lang, { LangString, LangStringFromILang } from '../../../components/Lang/Lang';
import LangsList from '../../../components/Lang/LangsList';

const Container = styled.div`
    width: ${isMobile ? "88vw" : "80%"};
    margin: 0 auto;
`;

const ProjectTitle = styled.h1`
    text-align: center;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--font-color);
    margin: 0;
    color: var(--secondary-color);
    cursor: pointer;
    font-size: 1.3rem;

    &>svg {
        margin-left: 8px;
        color: var(--font-color);
        font-size: .9rem;
        transform: rotate(-0deg);
    }
`;

const ContentContainer = styled.div<{ show: boolean }>`
    border: 1px solid var(--font-color);
    border-top: none;
    transition: max-height .5s ease-in-out, padding .5s ease-in-out, overflow .5s ease-in-out;

    ${props => props.show ?
        css`
            padding: 8px;
            max-height: 1000px;
        `
        :
        css`
            max-height: 0;
            overflow: hidden;
            padding: 0 8px;
            border: none;
        `
    }

    & p {
        margin: 4px 0;
    }
`

const MiscContainer = styled.div`
    border: 1px solid var(--font-color);
    border-top: none;
    padding: 8px;
    margin-bottom: 1rem;
    display: flex;
    ${isMobile && css`
        flex-direction: column;
    `}
`;

const LanguagesContainer = styled.div`
    flex-grow: 1;

    &>span:not(:last-of-type):after {
        content: "–";
        margin: 0 6px;
    }
`;

const LinksContainer = styled.div`
    margin-right: 8px;
    ${isMobile ?
        css`
            margin-top: 10px;
        `
        :
        css`
            float: right;
        `
    }

    &>a {
        &:hover>svg {
            color: var(--main-color) !important;
        }

        &>svg {
            margin-right: 8px;
            font-size: 1.2rem;
            transition: .5s;

            &.fa-github {
                color: #fff;
            }

            &.fa-youtube {
                color: #eb4034;
            }

            &.fa-external-link-alt {
                color: #fff;
            }
        }
    }
`;

const SecondaryTitle = styled.h2`
    color: var(--secondary-color);
    margin: 0;
    font-size: 1.2rem;
`;

const List = styled.ul`
    margin-left: 18px;
    margin: 0;
    padding: 0;
    ${isMobile ?
        css`
            list-style-type: "- ";
            padding-left: 12px;
        `
        :
        css`
            list-style-type: "\\21AA \\0020";
            padding-left: 18px;
        `
    };

    &>li {
        padding: 2px 0;
    }
`;

const ContributorsContainer = styled.div`
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;

    &>svg {
        margin: 0 2px;
    }
`;

type PropsType = {
    project: IProject;
}

const ProjectCard = ({ project }: PropsType): JSX.Element => {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const [show, setShow] = React.useState<boolean>(false);

    const handleTitleClick = () => {
        if (!show && cardRef.current)
            window.scrollTo(0, cardRef.current.offsetTop - 200);

        setShow(!show);
    }

    return (
        <Container ref={cardRef}>
            <ProjectTitle onClick={handleTitleClick}>
                <Lang content={project.label} /><FontAwesomeIcon icon={show ? faChevronUp : faChevronDown} />
            </ProjectTitle>
            <ContentContainer show={show}>
                {project.objective &&
                    <>
                        <SecondaryTitle><Lang name={LangsList.project_objective} /></SecondaryTitle>
                        <p><Markdown>{LangStringFromILang(project.objective)}</Markdown></p>
                    </>
                }
                {project.aimedSkills &&
                    <>
                        <SecondaryTitle><Lang name={LangsList.project_aimed_skills} /></SecondaryTitle>
                        <List>
                            {project.aimedSkills.map((skill, index) =>
                                <li key={index}><Markdown>{LangStringFromILang(skill)}</Markdown></li>
                            )}
                        </List>
                    </>
                }
                {project.features &&
                    <>
                        <SecondaryTitle><Lang name={LangsList.project_features} /></SecondaryTitle>
                        <List>
                            {project.features.map((skill, index) =>
                                <li key={index}><Markdown>{LangStringFromILang(skill)}</Markdown></li>
                            )}
                        </List>
                    </>
                }
                {project.numberOfContributors && project.numberOfContributors > 0 &&
                    <ContributorsContainer title={project.numberOfContributors + LangString(LangsList.project_number_of_contributors)}>
                        {Array.from(Array(project.numberOfContributors), (e, i) => {
                            return <FontAwesomeIcon icon={faUser} key={i} />
                        })}
                    </ContributorsContainer>
                }
            </ContentContainer>
            <MiscContainer>
                <LanguagesContainer>
                    {project.techs.map((tech, index) =>
                        <LanguageComponent key={index} name={tech} />
                    )}
                </LanguagesContainer>
                <LinksContainer>
                    {project.links?.site &&
                        <a href={project.links?.site} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
                    }
                    {project.links?.youtube &&
                        <a href={project.links?.youtube} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faYoutube} /></a>
                    }
                    {project.links?.github &&
                        <a href={project.links?.github} target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
                    }
                </LinksContainer>
            </MiscContainer>
        </Container>
    );
}

export default ProjectCard;