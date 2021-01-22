import React from 'react';

import { Segment, SegmentTitle } from '../../../../components/styledComponents';

import { AboutItem } from '../../About';

type PropsType = {
    qualities: string[];
}

const Qualities = ({ qualities }: PropsType): JSX.Element => {
    return (
        <AboutItem>
            <SegmentTitle>Qualités</SegmentTitle>
            <Segment>
                <ul>
                    {qualities.map((quality, index) => (
                        <li key={index}>{quality}</li>
                    ))}
                </ul>
            </Segment>
        </AboutItem>
    );
}

export default Qualities;