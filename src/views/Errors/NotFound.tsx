import React from 'react';
import { ViewContainer } from '../../App';
import NavBar from '../../features/NavBar';

import logo from '../../logo.svg';

const NotFound = (): JSX.Element => {
    return (
        <ViewContainer>
            <NavBar />
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
        </ViewContainer>
    );
}

export default NotFound;