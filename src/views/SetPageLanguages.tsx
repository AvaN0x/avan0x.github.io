import React from 'react';
import { useHistory, useParams } from 'react-router-dom';

import { ViewContainer } from 'App';
import Loading from 'components/Loading';
import NavBar from 'features/NavBar';
import Cookies from 'js-cookie';

const SetPageLanguages = (): JSX.Element => {
    const { language }: { language: string } = useParams();
    const history = useHistory();

    Cookies.set("language", language, { expires: 365 });
    history.push("/");

    return (
        <ViewContainer>
            <NavBar />
            <Loading />
        </ViewContainer>
    );
}

export default SetPageLanguages;