import React from 'react';
import styled from '@emotion/styled';

import { css, keyframes } from '@emotion/react';

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

const StyledFrontContainer = styled.div<{ allowClick: boolean }>`
    background-color: #3333337d;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    margin: 0 !important;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    ${(props) =>
        !props.allowClick &&
        css`
            z-index: 10000;
        `}

    & > h1 {
        color: var(--font-color);
        margin: 4px;
    }

    & > p {
        color: var(--font-color);
        margin: 4px;
        opacity: 0.8;
    }
`;

const LoadImage = styled.img<{ spin: boolean }>`
    height: 8rem;
    position: relative;
    top: -8px;
    border-radius: 50%;
    float: right;
    border: 1px solid var(--header-font-color);
    transform: rotate(0);
    transition: 0.5s;
    color: white;
    ${(props) =>
        props.spin &&
        css`
            animation: ${InfiniteRotate} 2s linear infinite;
        `}
`;

type PropsType = {
    title?: string;
    subtitle?: string;
    allowClick?: boolean;
    noSpinning?: boolean;
    noImage?: boolean;
};

const Loading = ({
    title,
    subtitle,
    allowClick,
    noSpinning,
    noImage,
}: PropsType): JSX.Element => {
    return (
        <StyledFrontContainer allowClick={!!allowClick}>
            {!noImage && (
                <LoadImage
                    src="https://avatars3.githubusercontent.com/u/27494805"
                    title="github.com/AvaN0x"
                    alt="github.com/AvaN0x"
                    spin={!noSpinning}
                />
            )}
            {title && <h1>{title}</h1>}
            {subtitle && <p>{subtitle}</p>}
        </StyledFrontContainer>
    );
};

export default Loading;
