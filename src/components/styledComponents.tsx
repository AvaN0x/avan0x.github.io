import styled from '@emotion/styled';
import { isMobile } from 'react-device-detect';

export const Section = styled.section`
    max-width: 1100px;
    margin: 0 auto;
    padding: 15px;
    box-sizing: border-box;
    text-align: justify;
`;

export const SegmentTitle = styled.h1`
    border: none;
    border-bottom: 2px solid var(--secondary-color);
    font-size: 1.2rem;
    padding: 0 4px;
    margin: 0;
    text-align: left;
    display: inline-block;
    color: var(--main-color);
`;

export const Segment = styled.div`
    transition: .5s;
    border-left: 2px solid var(--secondary-color);
    box-sizing: border-box;
    padding-bottom: .1rem;
    margin-bottom: 2rem;

    & > ul {
        list-style-type: none;
        margin: 0;
        padding: 8px;

        & > li {
            padding: 4px 0;
        }
    }
`;

export const LanguageContainer = styled.div`
    &:not(:last-of-type):after {
        content: "-";
        margin: 0 6px;
    }
`;

export const LanguageImg = styled.img`
    height: 1rem;
    vertical-align: middle;
    margin: 0 4px 0 0;
    padding: 4px;
    border-radius: 8px;
    background-color: #00000060;
`;

export const EducationContainer = styled.div`
    margin: 0;
    padding: 4px;

    &>h1 {
        border: none;
        text-align: left;
        font-size: 1rem;
        margin: 0;
        padding: 0;
        color: var(--main-color);
    }

    &>p {
        text-indent: 20px;
        margin: 2px;
    }
`;

export const ExperienceContainer = styled(EducationContainer);