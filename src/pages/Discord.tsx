import React from 'react';

import { LangString } from 'components/Lang/Lang';
import LangsList from 'components/Lang/LangsList';

import Loading from 'components/Loading';
import NavBar from 'components/layout/NavBar';

const Discord = (): JSX.Element => {
    React.useEffect(() => {
        fetch(
            'https://discordapp.com/api/guilds/673139614927683594/widget.json'
        )
            .then((res) => res.json())
            .then((result) => {
                window.location.href = result.instant_invite;
            });
    }, []);

    return (
        <>
            <NavBar />
            <Loading title={LangString(LangsList.discord_redirection)} />
        </>
    );
};

export default Discord;
