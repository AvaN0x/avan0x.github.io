import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import NavHeader from './NavHeader';

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
        </>
    );
}

export default NavBar;