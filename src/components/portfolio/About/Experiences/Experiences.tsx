import React from 'react';

import {
    EducationContainer,
    Segment,
    SegmentTitle,
} from 'components/styledComponents';

import IExperience from './IExperience';
import { AboutItem } from 'components/portfolio/About';

import Lang from 'components/Lang/Lang';
import LangsList from 'components/Lang/LangsList';

type PropsType = {
    experiences: IExperience[];
};

const Educations = ({ experiences }: PropsType): JSX.Element => {
    return (
        <AboutItem>
            <SegmentTitle>
                <Lang name={LangsList.about_experiences} />
            </SegmentTitle>
            <Segment>
                {experiences.map((experience, index) => (
                    <EducationContainer key={index}>
                        <h1>
                            <Lang content={experience.label} />
                        </h1>
                        {experience.subtitle && (
                            <p>
                                <i>
                                    <Lang content={experience.subtitle} />
                                </i>
                            </p>
                        )}
                        <p>
                            <Lang content={experience.location} />
                        </p>
                        <p>
                            <Lang content={experience.date.start} /> –{' '}
                            <Lang content={experience.date.end} />
                        </p>
                    </EducationContainer>
                ))}
            </Segment>
        </AboutItem>
    );
};

export default Educations;
