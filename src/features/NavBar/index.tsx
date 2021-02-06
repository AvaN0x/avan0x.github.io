import React from 'react';
import { isMobile } from 'react-device-detect';
import Cookies from 'js-cookie';

import NavHeader from './NavHeader';
import NavMenu from './NavMenu';

type PropsType = {
    children?: React.ReactNode;
}

const NavBar = ({ children }: PropsType): JSX.Element => {
    const [navState, setNavState] = React.useState<boolean>(Cookies.get("nav_state") === "true");

    const toggleMenu = (state: boolean) => {
        setNavState(state);
        Cookies.set("nav_state", state.toString(), { expires: 365 });
    }

    const childrenInMenu: boolean = React.Children.count(children) > 4 || isMobile;

    return (
        <>
            <NavHeader toggleMenu={toggleMenu} defaultMenuState={navState}>
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