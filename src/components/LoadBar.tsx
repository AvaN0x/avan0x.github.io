import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

const Container = styled.div`
    height: 10px;
    width: 100px;
    border-radius: 5px;
    display: inline-block;
    margin: 5px;
    position: relative;
    top: 5px;
    border: 1px solid #ffffff60;
`;

const Fill = styled.div<{ pourcent: number }>`
    width: ${props => props.pourcent}%;
    height: 100%;
    background-color: var(--main-color);
    border-radius: 5px;
    animation: barfill 2s ease-in-out;
`;

const LoadBar = ({ pourcent }: { pourcent: number }) => {
    return (
        <Container>
            <Fill pourcent={pourcent}></Fill>
        </Container>
    );
}

export default LoadBar;