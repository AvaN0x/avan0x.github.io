import React from 'react';

import { LanguageList, Segment, SegmentTitle } from '../../../../components/styledComponents';

import { AboutItem } from '../../About';
import ITechs from './ITechs';
import LanguageComponent from '../../../../components/LanguageComponent';

type PropsType = {
    techs: ITechs;
}

const Techs = ({ techs }: PropsType): JSX.Element => {
    return (
        <AboutItem>
            <SegmentTitle>Langues</SegmentTitle>
            <Segment>
                <ul>
                    {techs.others.map((techList, index) => (
                        <LanguageList key={index}>
                            {techList.map((tech, techIndex) => (
                                <LanguageComponent name={tech} key={techIndex} />
                            ))}
                        </LanguageList>
                    ))}
                </ul>
                <h1>Langages</h1>
                <ul>
                    {techs.codingLanguages.map((techList, index) => (
                        <LanguageList key={index}>
                            {techList.map((tech, techIndex) => (
                                <LanguageComponent name={tech} key={techIndex} />
                            ))}
                        </LanguageList>
                    ))}
                </ul>
            </Segment>
        </AboutItem>
    );
}

export default Techs;