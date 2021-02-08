import React from 'react';
import { ViewContainer } from 'App';

import { LangString } from 'components/Lang/Lang';
import LangsList from 'components/Lang/LangsList';

import Loading from 'components/Loading';
import NavBar from 'features/NavBar';

const NotFound = (): JSX.Element => {
    return (
        <ViewContainer>
            <NavBar />
            <Loading title={LangString(LangsList.error_not_found_title)} subtitle={LangString(LangsList.error_not_found_subtitle)} allowClick noSpinning />
        </ViewContainer>
    );
}

export default NotFound;