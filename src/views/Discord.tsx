import React from 'react';
import { ViewContainer } from 'App';

import { LangString } from 'components/Lang/Lang';
import LangsList from 'components/Lang/LangsList';

import Loading from 'components/Loading';
import NavBar from 'features/NavBar';

const Discord = (): JSX.Element => {
    React.useEffect(() => {
        fetch("https://discordapp.com/api/guilds/673139614927683594/widget.json")
            .then(res => res.json())
            .then(
                (result) => {
                    window.location.href = result.instant_invite;
                }
            )
    }, [])

    return (
        <ViewContainer>
            <NavBar />
            <Loading title={LangString(LangsList.discord_redirection)} />
        </ViewContainer>
    );
}

export default Discord;