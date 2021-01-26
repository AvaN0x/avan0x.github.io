import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import { useAlert } from 'react-alert'

import { Section } from '../../components/styledComponents';
import { FirebaseDatabaseNode } from '@react-firebase/database';
import DiscordInvite from '../../components/DiscordInvite';

const ContactContainerStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > label {
        width: ${isMobile ? "90vw" : "600px"};
        margin: 8px 0 4px 0;
    }

    & > textarea,
    & > input[type = text] {
        width: ${isMobile ? "90vw" : "600px"};
        min-height: 1.2rem;
    }

    & > button {
        position: relative;
        text-align: center;
        padding: 10px;
        margin: 10px;
        border-radius: 10px;
        border: 1px solid var(--font-color);
        background: var(--main-transparent-color);
        color: var(--font-color);
        cursor: pointer;
        transition: .5s;
        font-size: 1em;

        &:hover {
            border: 1px solid var(--main-color);
            background: var(--font-color);
            color: var(--main-color);
        }
    }
`;

const ContactContainer = ({ mail }: { mail: string }): JSX.Element => {
    const alert = useAlert();

    //TODO size max
    const [name, setName] = React.useState("");
    const [content, setContent] = React.useState("");

    const handleSetNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);

    const handleSetContentOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value);


    const handleOnSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        let error = false;

        if (!name.trim()) {
            alert.error("Veuillez saisir votre nom.");
            error = true;
        }
        if (!content.trim()) {
            alert.error("Veuillez saisir un message.");
            error = true;
        }

        if (!error) {
            window.open('mailto:' + mail + '?subject=Contact - ' + name.trim() + '&body=' + content.trim());
            alert.success("Une fenêtre devrait s'ouvrir pour vous permettre d'envoyer le message.")
            setName("");
            setContent("");
        }
    }

    return (
        <ContactContainerStyle>
            <label htmlFor="name">Nom:</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleSetNameOnChange}
            />
            <label htmlFor="content">Message:</label>
            <textarea
                name="content"
                rows={5}
                value={content}
                onChange={handleSetContentOnChange}
            ></textarea>
            <button onClick={handleOnSubmit}>Contacter</button>
        </ContactContainerStyle>
    );
}


const Contact = (): JSX.Element => {
    return (
        <Section>
            <FirebaseDatabaseNode
                path="/email/"
                orderByKey
            >
                {data => !data.isLoading && data.value &&
                    <ContactContainer mail={data.value} />
                }
            </FirebaseDatabaseNode>
            <DiscordInvite />
        </Section>
    );
}

export default Contact;
