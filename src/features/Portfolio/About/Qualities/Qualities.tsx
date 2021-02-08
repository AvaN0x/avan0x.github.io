import React from 'react';

import ILang from 'components/Lang/ILang';
import Lang from 'components/Lang/Lang';
import LangsList from 'components/Lang/LangsList';

import { Segment, SegmentTitle } from 'components/styledComponents';

import { AboutItem } from 'features/Portfolio/About';

type PropsType = {
    qualities: (ILang | string)[];
}

const Qualities = ({ qualities }: PropsType): JSX.Element => {
    return (
        <AboutItem>
            <SegmentTitle><Lang name={LangsList.about_qualities} /></SegmentTitle>
            <Segment>
                <ul>
                    {qualities.map((quality, index) => (
                        <li key={index}><Lang content={quality} /></li>
                    ))}
                </ul>
            </Segment>
        </AboutItem>
    );
}

export default Qualities;