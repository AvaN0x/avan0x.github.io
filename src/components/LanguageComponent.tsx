import React from 'react';
import styled from '@emotion/styled';

const LanguageImg = styled.img`
    height: 1rem;
    vertical-align: middle;
    margin: 0 4px 0 0;
    padding: 4px;
    border-radius: 8px;
    background-color: #00000060;
    position: relative;
    top: -2px;
`;

interface IIcon {
    label: string;
    icons: string[];
}

//! source : https://worldvectorlogo.com/fr
const icons: { [id: string]: IIcon; } = {
    "windows": { label: "Windows", icons: ["https://cdn.worldvectorlogo.com/logos/microsoft-windows-22.svg"] },
    "linux": { label: "Linux", icons: ["https://cdn.worldvectorlogo.com/logos/linux-tux.svg", "https://cdn.worldvectorlogo.com/logos/ubuntu-4.svg"] },
    "office": { label: "Suite office", icons: ["https://cdn.worldvectorlogo.com/logos/office-1.svg"] },
    "photoshop": { label: "Photoshop", icons: ["https://cdn.worldvectorlogo.com/logos/photoshop-cc-7.svg"] },
    "git": { label: "Git", icons: ["https://cdn.worldvectorlogo.com/logos/git-icon.svg"] },
    "c": { label: "C", icons: ["https://cdn.worldvectorlogo.com/logos/c-2975.svg"] },
    "cs": { label: "C#", icons: ["https://cdn.worldvectorlogo.com/logos/c--4.svg"] },
    "java": { label: "Java", icons: ["https://cdn.worldvectorlogo.com/logos/java-14.svg"] },
    "lua": { label: "Lua", icons: ["https://cdn.worldvectorlogo.com/logos/lua-5.svg"] },
    "php": { label: "PHP", icons: ["https://cdn.worldvectorlogo.com/logos/php-1.svg"] },
    "mysql": { label: "MySQL", icons: ["https://cdn.worldvectorlogo.com/logos/mysql-6.svg"] },
    "js": { label: "JavaScript", icons: ["https://cdn.worldvectorlogo.com/logos/javascript.svg"] },
    "ts": { label: "TypeScript", icons: ["https://cdn.worldvectorlogo.com/logos/typescript.svg"] },
    "react": { label: "React", icons: ["https://cdn.worldvectorlogo.com/logos/react.svg"] },
    "html": { label: "HTML5", icons: ["https://cdn.worldvectorlogo.com/logos/html-5.svg"] },
    "css": { label: "CSS3", icons: ["https://cdn.worldvectorlogo.com/logos/css3.svg"] },
    "asm": { label: "x86 ASM", icons: ["https://www.flaticon.com/svg/static/icons/svg/987/987983.svg"] }
}

const LanguageComponent = ({ name }: { name: string }): JSX.Element => {
    if (icons[name]) {
        return (
            <span>
                {icons[name].icons.map((icon, techIndex) => (
                    <LanguageImg src={icon} key={techIndex} />
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