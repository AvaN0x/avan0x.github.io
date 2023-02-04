import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faCheckCircle,
    faExclamationCircle,
    faTimes,
} from '@fortawesome/free-solid-svg-icons';
import styled from '@emotion/styled';

const AlertBox = styled.div`
    width: fit-content;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    box-sizing: border-box;
    max-width: max(500px, 90vw);
    background-color: var(--header-footer-color);
    color: var(--font-color);
`;

const Button = styled.button`
    margin-left: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
    color: var(--font-color);
`;

const Message = styled.span`
    flex: 2;
    margin-left: 10px;
`;

const AlertTemplate = ({
    message,
    options,
    style,
    close,
}: any): JSX.Element => {
    return (
        <AlertBox style={{ ...style }}>
            {/* {options.type === 'info' && <FontAwesomeIcon icon={faInfoCircle} color={'#ddcc35'} />} */}{' '}
            {/* //? default value */}
            {options.type === 'success' && (
                <FontAwesomeIcon icon={faCheckCircle} color={'#43b581'} />
            )}
            {options.type === 'error' && (
                <FontAwesomeIcon icon={faExclamationCircle} color={'#eb4034'} />
            )}
            <Message>{message}</Message>
            <Button onClick={close}>
                <FontAwesomeIcon icon={faTimes} />
            </Button>
        </AlertBox>
    );
};

export default AlertTemplate;
