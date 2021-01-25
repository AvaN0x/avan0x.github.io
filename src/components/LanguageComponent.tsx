import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

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

const LanguageLink = styled.a<{ href?: string }>`
    ${props => props.href && css`
        &>img:hover {
            background-color: #ffffff20;
        }
    `}
`;

interface IIcon {
    label: string;
    title?: string;
    icons?: { src: string; href?: string }[];
}

//! source : https://worldvectorlogo.com/fr
const icons: { [id: string]: IIcon; } = {
    "windows": { label: "Windows", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg", href: "https://www.microsoft.com/windows/" }] },
    "linux": { label: "Linux", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/linux-tux.svg" }, { src: "https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg", href: "https://ubuntu.com/" }] },
    "office": { label: "Suite office", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/office-1.svg", href: "https://www.office.com/" }] },
    "photoshop": { label: "Photoshop", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/photoshop-cc-7.svg", href: "https://www.adobe.com/fr/products/photoshop.html" }] },
    "git": { label: "Git", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/git-icon.svg", href: "https://git-scm.com/" }] },
    "mvc": { label: "MVC", title: "Model View Controller" },
    "asm": { label: "x86 ASM", icons: [{ src: "https://www.flaticon.com/svg/static/icons/svg/987/987983.svg" }] },
    "c": { label: "C", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/c-2975.svg" }] },
    "cs": { label: "C#", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/c--4.svg", href: "https://docs.microsoft.com/dotnet/csharp/" }] },
    "wpf": { label: "WPF" },
    "java": { label: "Java", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/java-14.svg" }] },
    "javafx": { label: "JavaFX" },
    "junit": { label: "JUnit" },
    "lua": { label: "Lua", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/lua-5.svg", href: "http://www.lua.org/" }] },
    "php": { label: "PHP", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/php-1.svg", href: "https://www.php.net/" }] },
    "mysql": { label: "MySQL", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/mysql-6.svg", href: "https://www.mysql.com/" }] },
    "js": { label: "JavaScript", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/javascript.svg" }] },
    "ts": { label: "TypeScript", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/typescript.svg" }] },
    "react": { label: "React", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/react.svg", href: "https://reactjs.org/" }] },
    "redux": { label: "Redux", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/redux.svg", href: "https://redux.js.org/" }] },
    "saga": { label: "Redux-Saga", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/redux-saga.svg", href: "https://redux-saga.js.org/" }] },
    "ajax": { label: "Ajax", icons: [{ src: "https://upload.wikimedia.org/wikipedia/commons/a/a1/AJAX_logo_by_gengns.svg" }] },
    "html": { label: "HTML5", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/html-5.svg" }] },
    "css": { label: "CSS3", icons: [{ src: "https://cdn.worldvectorlogo.com/logos/css3.svg" }] },
}

const LanguageComponent = ({ name }: { name: string }): JSX.Element => {
    if (icons[name]) {
        return (
            <span title={icons[name].title || ""}>
                {icons[name].icons?.map((icon, techIndex) => (
                    <LanguageLink key={techIndex} target="_blank" rel="noreferrer" href={icon.href}>
                        <LanguageImg src={icon.src} />
                    </LanguageLink>
                ))}

                {icons[name].label}
            </span>
        );
    }
    else {
        console.error("`" + name + "` is missing from LanguageComponent.tsx");

        return (
            <span>
                {name}
            </span>
        );
    }
}

export default LanguageComponent;