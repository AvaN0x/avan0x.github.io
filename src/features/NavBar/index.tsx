import React from 'react';
import { isMobile } from 'react-device-detect';

import NavHeader from './NavHeader';
import NavMenu from './NavMenu';

type PropsType = {
    children?: React.ReactNode;
}

const NavBar = ({ children }: PropsType) => {
    const [navState, setNavState] = React.useState<boolean>(false);

    const childrenInMenu: boolean = React.Children.count(children) > 4 || isMobile;

    return (
        <>
            <NavHeader toggleMenu={setNavState}>
                {!childrenInMenu &&
                    children
                }
            </NavHeader>
            <NavMenu isOpen={navState}>
                {childrenInMenu &&
                    children
                }
            </NavMenu>
        </>
    );
}

export default NavBar;