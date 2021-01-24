import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPortrait } from '@fortawesome/free-solid-svg-icons';
import { css } from '@emotion/react';

const MenuContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 3rem;
    height: calc(100vh - 3rem);
    background-color: var(--nav-menu-color);
    overflow-y: auto;
    box-shadow: 0 3px 5px black;
    display: flex;
    flex-direction: column;
    z-index: 1001;
    transition: .5s;

    ${props => !isMobile ?
        css`
            left: ${props.isOpen ? "0" : "-300px"};
            width: 300px;
        `
        :
        css`
            left: ${props.isOpen ? "0" : "-100%"};
            width: 100%;
        `
    }
`;

const MenuSection = styled.div`
    border-bottom: 2px solid var(--main-transparent-color);
    font-size: 1.1rem;
    text-align: left;
    padding: 2px;
    display: flex;
    flex-direction: column;

    & > h1 {
        margin: 10px 0;
        padding: 0;
        text-align: center;
        font-size: 1.2rem;
        font-weight: normal;
        text-transform: uppercase
    }

    & > a {
        color: #fff;
        text-decoration: none;
        padding: 5px;
        padding-left: 2.3rem;
        font-size: 1.1rem;
        transition: .5s;

        & > svg {
            position: absolute;
            left: 15px;
            transform: translateY(10%);
            transition: .5s;
        }

        ${!isMobile && css`
            &:hover {
                color: var(--main-color);
                padding-left: calc(2.3rem + 5px);

                & > svg {
                    color: var(--main-color);
                    left: 20px;
                }
            }
        `}
    }
`;


type PropsType = {
    isOpen: boolean;
    children?: React.ReactNode;
}

const NavMenu = ({ isOpen, children }: PropsType): JSX.Element => {
    return (
        <MenuContainer isOpen={isOpen}>
            {children &&
                <MenuSection>
                    <h1>Sur cette page</h1>
                    {children}
                </MenuSection>
            }
            <MenuSection>
                <h1>A propos</h1>
                <a href="https://github.com/AvaN0x" target="_blank" rel="noreferrer">
                    <FontAwesomeIcon icon={faGithub} />GitHub
                </a>
                <NavLink to="/discord">
                    <FontAwesomeIcon icon={faDiscord} />Discord
                </NavLink>
                <NavLink to="/">
                    <FontAwesomeIcon icon={faPortrait} />Portfolio
                </NavLink>
            </MenuSection>


        </MenuContainer>
    );
}

export default NavMenu;