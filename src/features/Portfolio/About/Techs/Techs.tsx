import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import { LanguageList, Segment, SegmentTitle } from '../../../../components/styledComponents';
import LoadBar from '../../../../components/LoadBar';

import { AboutItem } from '../../About';
import ITechs from './ITechs';

type PropsType = {
    techs: ITechs;
}

const Techs = ({ techs }: PropsType) => {
    return (
        <AboutItem>
            <SegmentTitle>Langues</SegmentTitle>
            <Segment>
                <ul>
                    {techs.others.map((techList, index) => (
                        <LanguageList key={index}>
                            {techList.map((tech, techIndex) => (
                                <span key={techIndex}>{tech}</span>
                            ))}
                        </LanguageList>
                    ))}
                </ul>
                <h1>Langages</h1>
                <ul>
                    {techs.codingLanguages.map((techList, index) => (
                        <LanguageList key={index}>
                            {techList.map((tech, techIndex) => (
                                <span key={techIndex}>{tech}</span>
                            ))}
                        </LanguageList>
                    ))}
                </ul>
            </Segment>
        </AboutItem>
    );
}

export default Techs;