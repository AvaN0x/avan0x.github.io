import React from 'react';
import { ViewContainer } from '../../App';
import Loading from '../../components/Loading';
import NavBar from '../../features/NavBar';

const NotFound = (): JSX.Element => {
    return (
        <ViewContainer>
            <NavBar />
            <Loading title="404 Not Found" subtitle="Seems like you are lost ..." allowClick noSpinning />
        </ViewContainer>
    );
}

export default NotFound;