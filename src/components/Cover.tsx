import React from 'react';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';

const Scroll = keyframes`
    0% {
        transform: translateY(0);
        opacity: 1
    }

    80% {
        transform: translateY(15px);
        opacity: .5
    }

    100% {
        transform: translateY(0);
        opacity: 1
    }
`;

const CoverContainer = styled.div<{ url: string }>`
    width: 100%;
    height: 100vh;
    position: relative;
    display: flex;
    background-image: url(${props => props.url});
    background-size: cover;
    background-position: center;
`;

const CoverContentContainer = styled.div`
    background-color: var(--main-transparent-color);
    top: 50%;
    width: 100%;
    text-align: center;
    font-size: 30px;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: sticky;
    transform: translateY(-50%);

    & * {
        margin: 0;
        font-size: 1.5rem;
        color: var(--font-color);
    }

    & h1 {
        font-size: 2rem;
    }
`;

const AnimatedScroller = styled.a`
    padding-bottom: 15px;
    animation: ${Scroll} 1.8s linear infinite;

    & > svg {
        font-size: 1.2em;
    }
`;

type PropsType = {
    url: string;
    children?: React.ReactNode;
}

/**
 * Create a cover component with a background image
 * @param {string} url url of the image
 * @param {React.ReactNode} children content of the cover
 */
const Cover = ({ url, children }: PropsType) => {
    return (
        <>
            <CoverContainer url={url}>
                <CoverContentContainer>
                    {children}
                    <AnimatedScroller href="#scroll">
                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                    </AnimatedScroller>
                </CoverContentContainer>
            </CoverContainer>
            <span id="scroll"></span>
        </>
    );
}

export default Cover;