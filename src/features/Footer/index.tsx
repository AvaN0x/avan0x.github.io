import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { isMobile } from 'react-device-detect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const FooterContainer = styled.div`
    background-color: var(--header-footer-color);
    color: var(--font-color);
    position: absolute;
    padding: 10px;
    margin: 0;
    width: 100%;
    font-size: .9em;
    z-index: 1000;
    display: flex;
    justify-content: center;
    box-sizing: border-box;
    ${isMobile && css`
        flex-direction: column;
        text-align: center;
    `}

    & > p {
        margin: 0 20px;
    }

    & > svg {
        margin: 0 5px
    }

    ${!isMobile && css`
        & > p:not(:last-child):after {
            content: '-';
            position: relative;
            right: -20px
        }
    `}
`;

const Footer = (): JSX.Element => {
    return (
        <FooterContainer>
            <p>Site réalisé par <a href="https://github.com/AvaN0x">Clément RICATTE <FontAwesomeIcon icon={faGithub} /></a></p>
            <p>Licence <a href="https://github.com/AvaN0x/avan0x.github.io/blob/master/LICENSE">MIT</a></p >
        </FooterContainer >
    );
}

export default Footer;