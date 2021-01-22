import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import moment from 'moment';
import { Segment, SegmentTitle } from '../../../../components/styledComponents';
import LoadBar from '../../../../components/LoadBar';

import ILanguage from './ILanguage';
import { AboutItem } from '../../About';

type PropsType = {
    languages: ILanguage[];
}

const Personal = ({ languages }: PropsType) => {
    return (
        <AboutItem>
            <SegmentTitle>Langues</SegmentTitle>
            <Segment>
                <ul>
                    {languages.map((language, index) => (
                        <li key={index}>{language.label}<LoadBar pourcent={language.pourcent} /></li>
                    ))}
                </ul>
            </Segment>
        </AboutItem>
    );
}

export default Personal;