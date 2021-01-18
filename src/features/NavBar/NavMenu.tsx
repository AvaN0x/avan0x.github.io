import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

const MenuContainer = styled.div<{ isOpen: boolean }>`
    position: fixed;
    top: 3rem;
    height: calc(100vh - 3rem);
    left: ${props => props.isOpen ? "0" : "-300px"};
    width: 300px;
    background-color: var(--nav-menu-color);
    overflow-y: auto;
    box-shadow: 0 3px 5px black;
    display: flex;
    flex-direction: column;
    z-index: 1001;
    transition: .5s;
`;

type PropsType = {
    isOpen: boolean;
    children?: React.ReactNode;
}

const NavMenu = ({ isOpen, children }: PropsType) => {
    return (
        <MenuContainer isOpen={isOpen}>
            {children}
        </MenuContainer>
    );
}

export default NavMenu;