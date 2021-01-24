import React from 'react';
import styled from '@emotion/styled';

import { keyframes } from '@emotion/react';

const InfiniteRotate = keyframes`
    from {
        -webkit-transform: rotate(0deg);
        -o-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    to {
        -webkit-transform: rotate(360deg);
        -o-transform: rotate(360deg);
        transform: rotate(360deg);
    }
`;



const StyledFrontContainer = styled.div`
    background-color: #3333337D;
    position: fixed;
    top:0;
    left:0;
    width: 100vw;
    height: 100vh;
    margin: 0 !important;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 10000;

    & > img {
        color: white;
        animation: ${InfiniteRotate} 2s linear infinite;
    }

    & > h1 {
        color: var(--font-color);
    }
`;

const LoadImage = styled.img`
    height: 8rem;
    position: relative;
    top: -8px;
    border-radius: 50%;
    float: right;
    border: 1px solid var(--header-font-color);
    transform: rotate(0);
    transition: .5s;
`;

type PropsType = {
    title?: string;
}

const Loading = ({ title }: PropsType): JSX.Element => {
    return (
        <StyledFrontContainer>
            <LoadImage
                src="https://avatars3.githubusercontent.com/u/27494805?s=460&v=4" title="github.com/AvaN0x" alt="github.com/AvaN0x" />
            {title && <h1>{title}</h1>}
        </StyledFrontContainer>
    );
}

export default Loading;