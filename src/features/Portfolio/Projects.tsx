import React from 'react';
import styled from '@emotion/styled';

import { FirebaseDatabaseNode } from '@react-firebase/database';
import { Section, Segment, SegmentTitle } from '../../components/styledComponents';

import IProjects from './Projects/IProjects';
import ProjectCard from './Projects/ProjectCard';

const ProjectsContainerStyle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
`;

const CategoryTitle = styled.h1`
    font-size: 1.5rem;
    color: var(--main-color);
    text-align: center;
    padding-bottom: 8px;
    border-bottom: 1px solid var(--font-color);

    &:not(:first-of-type) {
        margin-top: 4rem;
    }
`;

const ProjectsContainer = ({ projects }: { projects: IProjects }) => {
    return (
        <ProjectsContainerStyle>
            {projects.schoolProjects?.map((school, schoolIndex) =>
                <div key={schoolIndex}>
                    <CategoryTitle>Projets scolaires ({school.label})</CategoryTitle>
                    {school.semesters?.map((semester, semesterIndex) =>
                        <div key={semesterIndex}>
                            <SegmentTitle>Semestre {semester.number}</SegmentTitle>
                            <Segment>
                                {semester.projects?.map((project, index) =>
                                    <ProjectCard project={project} key={index} />
                                )}
                            </Segment>
                        </div>
                    )}
                    {school.projects?.map((project, index) =>
                        <ProjectCard project={project} key={index} />
                    )}
                </div>
            )}
            {projects.personalProjects &&
                <>
                    <CategoryTitle>Projets personnels</CategoryTitle>
                    {projects.personalProjects?.map((project, index) =>
                        <ProjectCard project={project} key={index} />
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