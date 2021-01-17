import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faHome } from '@fortawesome/free-solid-svg-icons';

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

const Link = styled.a`
    cursor: pointer;
    position: relative;
    font-size: 1.2rem;
    line-height: calc(3rem - 2 * .7rem);
    color: var(--header-font-color);
    text-decoration: none;
    padding: .7rem 1rem;
    /* padding: 0 1rem; */
    transition: .5s;

    & > svg {
        transition: .5s;
        font-size: 1.6rem;
    }

    &:hover {
        color: var(--main-color);

        & > svg {
            transform: rotate(5deg) scale(1.1)
        }
    }
`;

type PropsType = {
    children?: React.ReactNode;
}

// TODO children parameter to add specific link to pages (display on bar if desktop, and in menu if mobile)
const NavBar = ({ children }: PropsType) => {
    return (
        <NavContainer>
            <Link href="/"><FontAwesomeIcon icon={faBars} /></Link>
            <Link href="/"><FontAwesomeIcon icon={faHome} /></Link>
            <Link href="/">About</Link>
            <Link href="/">Portfolio</Link>
            {/* <a href="https://github.com/AvaN0x" target="_blank" rel="noreferrer">
                <img
                    src="https://avatars3.githubusercontent.com/u/27494805?s=460&v=4" title="github.com/AvaN0x" alt="github.com/AvaN0x" />
            </a> */}
        </NavContainer>
    );
}

export default NavBar;