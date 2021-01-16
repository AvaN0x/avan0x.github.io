import React from 'react';
import styled from '@emotion/styled';

import logo from '../../logo.svg';

const NotFound = () => {
    return (
        <div className="App">
            <header>
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1>404 Not Found</h1>
                    <p>
                        Seems like you are lost ...
                    </p>
                </div>
            </header>
        </div>
    );
}

export default NotFound;