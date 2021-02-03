import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { useSelector } from 'react-redux';
import { isLoaded } from 'react-redux-firebase';
import { RootState } from '../../firebase/store';
import Lang, { LangStringFromILang } from '../Lang/Lang';

const LanguageImg = styled.img`
    height: 1rem;
    vertical-align: middle;
    margin: 0 4px 0 0;
    padding: 4px;
    border-radius: 8px;
    background-color: #00000060;
    position: relative;
    top: -2px;
    transition: background-color .5s;
`;

const LanguageComponent = ({ name }: { name: string }): JSX.Element => {
    const icons = useSelector((state: RootState) => state.firebase.data.icons)

    if (icons && icons[name]) {
        return (
            <span title={LangStringFromILang(icons[name].title) || ""}>
                {icons[name].icons?.map((icon, techIndex) => (
                    <LanguageLink key={techIndex} target="_blank" rel="noreferrer" href={icon.href}>
                        <LanguageImg src={icon.src} />
                    </LanguageLink>
                ))}

                <Lang content={icons[name].label} />
            </span>
        );
    }
    else {
        // only print error if icons have loaded
        if (isLoaded(icons)) {
            console.error("`" + name + "` is missing from icons");
        }

        return (
            <span>
                {name}
            </span>
        );
    }
}

const LanguageLink = styled.a<{ href?: string }>`
    ${props => props.href && css`
        &>img:hover {
            background-color: #ffffff20;
        }
    `}
`;

export default LanguageComponent;