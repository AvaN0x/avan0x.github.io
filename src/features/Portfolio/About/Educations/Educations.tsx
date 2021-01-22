import React from 'react';
import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';
import { FirebaseDatabaseNode } from '@react-firebase/database';

const Experiences = () => {
    return (
        <FirebaseDatabaseNode
            path="/about/educations/"
            orderByKey
        >
            {data => !data.isLoading && data.value &&
                <>
                    {/* {data.value.map((value: { label: any; }) => value.label)} */}
                    <button onClick={() => console.log(data)}>click test</button>
                </>
            }
        </FirebaseDatabaseNode>
    );
}

export default Experiences;