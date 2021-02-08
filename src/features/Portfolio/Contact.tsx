import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import { useAlert } from 'react-alert'

import { Section } from 'components/styledComponents';
import { FirebaseDatabaseNode } from '@react-firebase/database';
import DiscordInvite from 'components/DiscordInvite';

import Lang, { LangString } from 'components/Lang/Lang';
import LangsList from 'components/Lang/LangsList';

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

    const contact_error_name: string = LangString(LangsList.contact_error_name);
    const contact_error_message: string = LangString(LangsList.contact_error_message);
    const contact_success: string = LangString(LangsList.contact_success);

    //TODO size max
    const [name, setName] = React.useState("");
    const [content, setContent] = React.useState("");

    const handleSetNameOnChange = (event: React.ChangeEvent<HTMLInputElement>) => setName(event.target.value);

    const handleSetContentOnChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => setContent(event.target.value);


    const handleOnSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        event.preventDefault();
        let error = false;

        if (!name.trim()) {
            alert.error(contact_error_name);
            error = true;
        }
        if (!content.trim()) {
            alert.error(contact_error_message);
            error = true;
        }

        if (!error) {
            window.open('mailto:' + mail + '?subject=Contact - ' + name.trim() + '&body=' + content.trim());
            alert.success(contact_success)
            setName("");
            setContent("");
        }
    }

    return (
        <ContactContainerStyle>
            <label htmlFor="name"><Lang name={LangsList.contact_name} />:</label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleSetNameOnChange}
            />
            <label htmlFor="content"><Lang name={LangsList.contact_message} />:</label>
            <textarea
                name="content"
                rows={5}
                value={content}
                onChange={handleSetContentOnChange}
            ></textarea>
            <button onClick={handleOnSubmit}><Lang name={LangsList.contact_button} /></button>
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
