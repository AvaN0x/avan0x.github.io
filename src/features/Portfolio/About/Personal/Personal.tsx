import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

import { FirebaseDatabaseNode } from '@react-firebase/database';
import IPersonal from './IPersonal';
import PersonalComponent from './PersonalComponent';

const Personal = () => {
    return (
        <FirebaseDatabaseNode
            path="/about/personal/"
            orderByKey
        >
            {data => !data.isLoading && data.value &&
                <PersonalComponent personal={data.value as IPersonal} />
            }
        </FirebaseDatabaseNode>
    );
}

export default Personal;