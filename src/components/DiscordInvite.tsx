import React from 'react';
import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

const Container = styled.div`
    width: min(432px, 90vw);
    padding: 16px;
    margin: 1rem auto;
    border-radius: 4px;
    background-color: #2f3136;
    box-sizing: border-box;
    overflow: hidden;
    max-width: 96vw;

    & > p {
        color: #b9bbbe;
        text-overflow: ellipsis;
        text-align: left;
        cursor: default;
        font-size: 13px;

        &:first-of-type {
            text-transform: uppercase;
            margin-bottom: 12px;
            overflow: hidden;
            font-weight: 700;
            font-size: 12px;
            margin-top: 0;
        }
    }

    & a {
        color: #fff;
        cursor: pointer;
        text-overflow: ellipsis;
        font-weight: 600;
        transition: .2s;
    }
`;

const DetailsContainer = styled.div`
    max-width: 220px;
    position: relative;
    display: inline-block;
    box-sizing: border-box;

    & > p {
        color: #b9bbbe;
        text-overflow: ellipsis;
        cursor: default;
        font-size: 13px;
        margin: 4px 0;
    }
`;

const JoinButton = styled(NavLink)`
    background-color: #43b581;
    text-decoration: none;
    float: right;
    margin: 5px 0 5px 10px;
    max-width: 86;
    line-height: 40px;
    padding: 0 20px;
    position: relative;
    border-radius: 3px;
    font-size: 14px;

    &:hover {
        background-color: #3ca374;
    }
`;

const DiscordLogo = styled.img`
    border-radius: 15px;
    width: 50px;
    height: 50px;
    position: relative;
    float: left;
    margin-right: 16px;
`;

const DiscordBubble = styled.i`
    width: 8px;
    height: 8px;
    background-color: #43b581;
    border-radius: 50%;
    display: inline-block;
`;

interface IDiscordInvite {
    name: string;
    onlines: number;
}

const DiscordInvite = (): JSX.Element => {
    const [discord, setDiscord] = React.useState<IDiscordInvite | null>(null);

    React.useEffect(() => {
        fetch("https://discordapp.com/api/guilds/673139614927683594/widget.json")
            .then(res => res.json())
            .then(
                (result) => {
                    setDiscord({
                        name: result.name,
                        onlines: result.presence_count
                    });
                }
            )
    }, [])

    return (
        <Container>
            <p>Tu as reçu une invitation à rejoindre un serveur par AvaN0x#6348</p>
            <DiscordLogo src="https://avatars3.githubusercontent.com/u/27494805" />
            <DetailsContainer>
                <NavLink to="/discord">
                    {discord?.name || ""}
                </NavLink>
                <p><DiscordBubble /> <strong>{discord?.onlines || -1}</strong> en ligne</p>
            </DetailsContainer>
            <JoinButton to="/discord">
                Rejoindre
            </JoinButton>
        </Container>
    );
}

export default DiscordInvite;