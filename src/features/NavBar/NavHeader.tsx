import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome, faTimes } from '@fortawesome/free-solid-svg-icons';

import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';

type PropsType = {
    toggleMenu: (value: boolean) => void;
    children?: React.ReactNode;
}

const NavHeader = ({ children, toggleMenu }: PropsType): JSX.Element => {
    const [navState, setNavState] = React.useState<boolean>(false);

    const handleToggleMenu = () => {
        toggleMenu(!navState);
        setNavState(!navState);
    }

    return (
        <NavContainer>
            <LeftItemContainer>
                <NavBarToggle isOpen={navState} onClick={handleToggleMenu} />
                <NavLink to="/"><FontAwesomeIcon icon={faHome} /></NavLink>
                {children}
            </LeftItemContainer>

            <RightItemContainer>
                <a href="https://github.com/AvaN0x" target="_blank" rel="noreferrer">
                    <GitImage
                        src="https://avatars3.githubusercontent.com/u/27494805?s=460&v=4" title="github.com/AvaN0x" alt="github.com/AvaN0x" />
                </a>
            </RightItemContainer>
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
`;

const NavItemContainer = styled.div`
    display: flex;

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

const LeftItemContainer = styled(NavItemContainer)`
    flex-grow: 1;
`;

const RightItemContainer = styled(NavItemContainer)`
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

const GitImage = styled.img`
    height: 2.4rem;
    position: relative;
    top: -8px;
    border-radius: 50%;
    float: right;
    border: 1px solid var(--header-font-color);
    transform: rotate(0);
    transition: .5s;

    &:hover {
        transform: rotate(360deg);
        border: 1px solid var(--main-color);
        border-radius: 30%
    }
`;

const NavBarToggle = ({ isOpen, onClick }: { isOpen?: boolean; onClick?: (event: React.SyntheticEvent) => void; }) => {
    return (
        <ToggleLink isOpen={isOpen} onClick={onClick}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
        </ToggleLink>
    );
}


export default NavHeader;