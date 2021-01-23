import React from 'react';
import styled from '@emotion/styled';

import { FirebaseDatabaseNode } from '@react-firebase/database';
import { Section } from '../../components/styledComponents';

import IProjects from './Projects/IProjects';

const ProjectsContainerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;


const ProjectsContainer = ({ projects }: { projects: IProjects }) => {
    console.log(projects);

    return (
        <ProjectsContainerStyle>
            {projects.schoolProjects?.map((school, schoolIndex) =>
                <div key={schoolIndex}>
                    <h1>Projets scolaires ({school.label})</h1>

                    {school.semesters && school.semesters?.map((semester, semesterIndex) =>
                        <div key={semesterIndex}>
                            <h1>Semestre {semester.number}</h1>
                            {semester.projects?.map((project, index) =>
                                <p key={index}>{project.label}</p>
                            )}
                        </div>
                    )}
                    {school.projects?.map((project, index) =>
                        <p key={index}>{project.label}</p>
                    )}
                </div>
            )}
            {projects.personalProjects &&
                <>
                    <h1>Projets personnels</h1>
                    {projects.personalProjects?.map((project, index) =>
                        <p key={index}>{project.label}</p>
                    )}
                </>
            }
        </ProjectsContainerStyle>
    );
}

const Projects = (): JSX.Element => {
    return (
        <Section>
            <FirebaseDatabaseNode
                path="/projects/"
                orderByKey
            >
                {data => !data.isLoading && data.value &&
                    <ProjectsContainer projects={data.value} />
                }
            </FirebaseDatabaseNode>
        </Section>
    );
}

export default Projects;