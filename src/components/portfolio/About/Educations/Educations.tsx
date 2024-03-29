import React from 'react';

import {
    EducationContainer,
    Segment,
    SegmentTitle,
} from 'components/styledComponents';

import IEducation from './IEducation';
import { AboutItem } from 'components/portfolio/About';

import Lang from 'components/Lang/Lang';
import LangsList from 'components/Lang/LangsList';

type PropsType = {
    educations: IEducation[];
};

const Educations = ({ educations }: PropsType): JSX.Element => {
    return (
        <AboutItem>
            <SegmentTitle>
                <Lang name={LangsList.about_diplomas} />
            </SegmentTitle>
            <Segment>
                {educations.map((education, index) => (
                    <EducationContainer key={index}>
                        <h1>
                            <Lang content={education.label} />
                        </h1>
                        {education.subtitle && (
                            <p>
                                <i>
                                    <Lang content={education.subtitle} />
                                </i>
                            </p>
                        )}
                        <p>
                            <Lang content={education.location} />
                        </p>
                        <p>
                            {education.date.start} – {education.date.end}
                        </p>
                    </EducationContainer>
                ))}
            </Segment>
        </AboutItem>
    );
};

export default Educations;
