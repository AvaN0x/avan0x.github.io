import React, { useState } from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import { useAlert } from 'react-alert';

import { Section } from 'components/styledComponents';
import DiscordInvite from 'components/DiscordInvite';

import Lang, { LangString } from 'components/Lang/Lang';
import LangsList from 'components/Lang/LangsList';
import { useDatabase } from 'components/context/DatabaseProvider';

const ContactContainerStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    & > label {
        width: ${isMobile ? '90vw' : '600px'};
        margin: 8px 0 4px 0;
    }

    & > textarea,
    & > input[type='text'],
    & > input[type='email'] {
        width: ${isMobile ? '90vw' : '600px'};
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
        transition: 0.5s;
        font-size: 1em;

        &:not(:disabled):hover {
            border: 1px solid var(--main-color);
            background: var(--font-color);
            color: var(--main-color);
        }

        &:disabled {
            opacity: 0.6;
            color: var(--header-footer-color);
            border: 1px solid var(--header-footer-color);
            cursor: not-allowed;

            &:hover {
                opacity: 0.8;
            }
        }
    }
`;

const ContactContainer = ({ webhook }: { webhook: string }): JSX.Element => {
    const alert = useAlert();

    const contact_error_name: string = LangString(LangsList.contact_error_name);
    const contact_error_email: string = LangString(
        LangsList.contact_error_email
    );
    const contact_error_message: string = LangString(
        LangsList.contact_error_message
    );
    const contact_success: string = LangString(LangsList.contact_success);
    const contact_error_webhook: string = LangString(
        LangsList.contact_error_webhook
    );

    const [isProcessingRequest, setIsProcessingRequest] =
        useState<boolean>(false);

    //TODO max size
    const [name, setName] = useState<string>(''); //? discord size max : 256
    const [email, setEmail] = useState<string>(''); //? discord size max : 2048
    const [content, setContent] = useState<string>(''); //? discord size max : 2048

    const handleSetNameOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => setName(event.target.value);
    const handleSetEmailOnChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => setEmail(event.target.value);
    const handleSetContentOnChange = (
        event: React.ChangeEvent<HTMLTextAreaElement>
    ) => setContent(event.target.value);

    const handleOnSubmit = (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
        event.preventDefault();
        let error = false;

        if (!name.trim() || name.length < 5) {
            alert.error(contact_error_name);
            error = true;
        }
        if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert.error(contact_error_email);
            error = true;
        }
        if (!content.trim() || content.length < 10) {
            alert.error(contact_error_message);
            error = true;
        }

        if (!error) {
            setIsProcessingRequest(true);
            const bodyContent = JSON.stringify({
                username: 'avan0x.github.io',
                avatar_url: 'https://avatars3.githubusercontent.com/u/27494805',
                embeds: [
                    {
                        title: name,
                        description: content,
                        color: 7653631,
                        footer: {
                            text: email,
                        },
                    },
                ],
            });

            fetch(webhook, {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: bodyContent,
            })
                .then((data) => {
                    if (data.ok) {
                        alert.success(contact_success);
                        setName('');
                        setEmail('');
                        setContent('');
                    } else alert.error(contact_error_webhook);

                    setIsProcessingRequest(false);
                })
                .catch(() => {
                    alert.error(contact_error_webhook);
                    setIsProcessingRequest(false);
                });
        }
    };

    return (
        <ContactContainerStyle>
            <label htmlFor="name">
                <Lang name={LangsList.contact_name} />:
            </label>
            <input
                type="text"
                name="name"
                value={name}
                onChange={handleSetNameOnChange}
                required
            />
            <label htmlFor="email">
                <Lang name={LangsList.contact_email} />:
            </label>
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleSetEmailOnChange}
                required
            />
            <label htmlFor="content">
                <Lang name={LangsList.contact_message} />:
            </label>
            <textarea
                name="content"
                rows={5}
                value={content}
                onChange={handleSetContentOnChange}
                required
            ></textarea>
            <button onClick={handleOnSubmit} disabled={isProcessingRequest}>
                <Lang name={LangsList.contact_button} />
            </button>
        </ContactContainerStyle>
    );
};

const Contact = (): JSX.Element => {
    const contactWebhook = import.meta.env.VITE_CONTACT_WEBHOOK;

    return (
        <Section>
            {contactWebhook && <ContactContainer webhook={contactWebhook} />}
            <DiscordInvite />
        </Section>
    );
};

export default Contact;
