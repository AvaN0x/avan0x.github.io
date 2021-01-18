import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';

import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

type PropsType = {
    children?: React.ReactNode;
}

// TODO children parameter to add specific link to pages (display on bar if desktop, and in menu if mobile)
const NavBar = ({ children }: PropsType) => {
    const [navState, setNavState] = React.useState<boolean>(false);

    const handleToggleMenu = () => setNavState(!navState);

    return (
        <NavContainer>
            <NavBarToggle isOpen={navState} onClick={handleToggleMenu} />
            <NavLink to="/"><FontAwesomeIcon icon={faHome} /></NavLink>
            {!isMobile &&
                children
            }
            {/* <a href="https://github.com/AvaN0x" target="_blank" rel="noreferrer">
                <img
                    src="https://avatars3.githubusercontent.com/u/27494805?s=460&v=4" title="github.com/AvaN0x" alt="github.com/AvaN0x" />
            </a> */}
        </NavContainer>
    );
}


const NavContainer = styled.div`
    width: 100vw;
    position: fixed;
    top: 0;
    box-sizing: border-box;
    height: 3rem;
    background: var(--header-footer-color);
    padding: 0 5px;
    display: flex;
    z-index: 1000;

    & > a {
        cursor: pointer;
        position: relative;
        font-size: 1.2rem;
        line-height: calc(3rem - 2 * .7rem);
        color: var(--header-font-color);
        text-decoration: none;
        padding: .7rem 1rem;
        transition: .5s;

        & > svg {
            transition: .5s;
            font-size: 1.6rem;
        }

        ${!isMobile && css`
            &:hover {
                color: var(--main-color);

                & > svg {
                    transform: rotate(5deg) scale(1.1);
                }
            }
        `}
    }
`;

const ToggleLink = styled.a<{ isOpen?: boolean }>`
    width: 1.2rem;

    ${props => props.isOpen && css`
        & svg {
            transform: rotate(90deg);
            color: var(--main-color);
        }

        ${!isMobile && css`
            &:hover svg {
                transform: rotate(80deg) scale(1.1) !important;
            }
        `}
    `}
`;

const NavBarToggle = ({ isOpen, onClick }: { isOpen?: boolean; onClick?: (event: React.SyntheticEvent) => void; }) => {
    return (
        <ToggleLink isOpen={isOpen} onClick={onClick}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </ToggleLink>
    );
}


export default NavBar;