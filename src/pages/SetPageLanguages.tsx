import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Loading from 'components/Loading';
import NavBar from 'components/layout/NavBar';

const SetPageLanguages = (): JSX.Element => {
    const { language } = useParams();
    const navigate = useNavigate();

    localStorage.setItem('language', language!);
    navigate('/');

    return (
        <>
            <NavBar />
            <Loading />
        </>
    );
};

export default SetPageLanguages;
