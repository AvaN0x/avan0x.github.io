import React, { useState } from 'react';
import { isMobile } from 'react-device-detect';

import NavHeader from './NavHeader';
import NavMenu from './NavMenu';

type PropsType = {
    children?: React.ReactNode;
};

const NavBar = ({ children }: PropsType): JSX.Element => {
    const [navState, setNavState] = useState<boolean>(
        localStorage.getItem('nav_state') === 'true'
    );

    const toggleMenu = (state: boolean) => {
        setNavState(state);
        localStorage.setItem('nav_state', state.toString());
    };

    const childrenInMenu: boolean =
        React.Children.count(children) > 4 || isMobile;

    return (
        <>
            <NavHeader toggleMenu={toggleMenu} defaultMenuState={navState}>
                {!childrenInMenu && children}
            </NavHeader>
            <NavMenu isOpen={navState}>{childrenInMenu && children}</NavMenu>
        </>
    );
};

export default NavBar;
