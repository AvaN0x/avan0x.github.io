import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import IProject from './IProject';

type PropsType = {
    project: IProject;
}

const ProjectCard = ({ project }: PropsType): JSX.Element => {
    return (
        <div>
            {project.label}
        </div>
    );
}

export default ProjectCard;