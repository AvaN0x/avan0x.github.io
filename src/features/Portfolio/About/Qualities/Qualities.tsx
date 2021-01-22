import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import { Segment, SegmentTitle } from '../../../../components/styledComponents';
import LoadBar from '../../../../components/LoadBar';

import { AboutItem } from '../../About';

type PropsType = {
    qualities: string[];
}

const Qualities = ({ qualities }: PropsType) => {
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