import React from 'react';

import ILang from './ILang';
import { useSelector } from 'react-redux';
import { RootState } from '../../firebase/store';
import { isLoaded } from 'react-redux-firebase';

type PropsType = {
    name?: string;
    content?: ILang | string;
}

export const LangString = (name: string): string => {
    const langs = useSelector((state: RootState) => state.firebase.data.langs)
    if (langs && langs[name]) {
        return LangStringFromILang(langs[name]);
    } else {
        if (isLoaded(langs)) {
            console.error("`" + name + "` is missing from langs");

            return name;
        } else {
            return "";
        }
    }
}

export const LangStringFromILang = (content: ILang | string | undefined): string => {
    const language = "fr";

    if (typeof content === "string")
        return content;
    else if (content)
        return content[language] || content.en || content.fr;
    else
        return "";
}

const Lang = ({ name, content }: PropsType): JSX.Element => {
    if (content) {
        return <>{LangStringFromILang(content)}</>
    } else if (name) {
        return <>{LangString(name)}</>
    } else {
        return <></>;
    }
}


export default Lang;