import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';


const ColoredSectionComponent = styled.section`
    background-color: var(--bar-color);
    margin: 0;
    padding: 15px;
    box-sizing: border-box;

    &:not(:first-of-type) {
        margin-top: 8rem;
    }

    & > h1 {
        text-align: center;
        color: var(--font-color);
        font-size: 4rem;
        margin: 0;
        border-bottom: none;
        font-variant: small-caps;
    }
`;

type PropsType = {
    title: string;
    id?: string;
}

const ColoredSection = ({ title, id }: PropsType) => {
    return (
        <ColoredSectionComponent id={id}>
            <h1>{title}</h1>
        </ColoredSectionComponent>
    );
}

export default ColoredSection;