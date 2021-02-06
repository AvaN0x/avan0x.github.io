import React from 'react';

import { Segment, SegmentTitle } from '../../../../components/styledComponents';
import LoadBar from '../../../../components/LoadBar';

import ILanguage from './ILanguage';
import { AboutItem } from '../../About';

import Lang from '../../../../components/Lang/Lang';
import LangsList from '../../../../components/Lang/LangsList';

type PropsType = {
    languages: ILanguage[];
}

const Languages = ({ languages }: PropsType): JSX.Element => {
    return (
        <AboutItem>
            <SegmentTitle><Lang name={LangsList.about_languages} /></SegmentTitle>
            <Segment>
                <ul>
                    {languages.map((language, index) => (
                        <li key={index}><Lang content={language.label} /><LoadBar pourcent={language.pourcent} /></li>
                    ))}
                </ul>
            </Segment>
        </AboutItem>
    );
}

export default Languages;