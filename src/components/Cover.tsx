import React, { useState } from 'react';
import styled from '@emotion/styled';

import { keyframes } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons';
import { HashLink } from 'react-router-hash-link';

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
    background-image: url(${(props) => props.url});
    background-size: cover;
    background-position: center;
`;

const CoverContentContainer = styled.div<{ actualHeight: number }>`
    position: relative;
    background-color: var(--main-transparent-color);
    top: calc(50% ${(props) => ' - ' + props.actualHeight / 2 + 'px'});
    width: 100%;
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    position: sticky;

    & * {
        margin: 0;
        font-size: 1.5rem;
        color: var(--font-color);
    }

    & h1 {
        font-size: 2rem;
    }
`;

const AnimatedScroller = styled(HashLink as any)`
    padding-bottom: 1rem;
    animation: ${Scroll} 1.8s linear infinite;

    & > svg {
        font-size: 1.8rem;
    }
`;

type PropsType = {
    url: string;
    children?: React.ReactNode;
};

/**
 * Create a cover component with a background image
 * @param {string} url url of the image
 * @param {React.ReactNode} children content of the cover
 */
const Cover = ({ url, children }: PropsType): JSX.Element => {
    const [contentHeight, setContentHeight] = useState(0);
    const contentRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        setContentHeight(contentRef.current?.clientHeight || 0);
    }, [contentRef]);

    return (
        <>
            <CoverContainer url={url}>
                <CoverContentContainer
                    ref={contentRef}
                    actualHeight={contentHeight}
                >
                    {children}
                    <AnimatedScroller smooth to="#scroll">
                        <FontAwesomeIcon icon={faAngleDoubleDown} />
                    </AnimatedScroller>
                </CoverContentContainer>
            </CoverContainer>
            <span id="scroll"></span>
        </>
    );
};

export default Cover;
