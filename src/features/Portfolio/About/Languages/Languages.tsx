import React from 'react';

import { Segment, SegmentTitle } from '../../../../components/styledComponents';
import LoadBar from '../../../../components/LoadBar';

import ILanguage from './ILanguage';
import { AboutItem } from '../../About';

type PropsType = {
    languages: ILanguage[];
}

const Languages = ({ languages }: PropsType): JSX.Element => {
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

export default Languages;