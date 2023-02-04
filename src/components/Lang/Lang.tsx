import { useDatabase } from 'components/context/DatabaseProvider';

import ILang from './ILang';

type PropsType = {
    name?: string;
    content?: ILang | string;
};

export const LangString = (name: string): string => {
    const langs = useDatabase()?.langs;
    if (!langs) {
        return '↺'; // possible other character : ⌴
    }
    if (langs[name]) {
        return LangStringFromILang(langs[name]);
    }

    console.error('`' + name + '` is missing from langs');

    return name;
};

export const LangStringFromILang = (
    content: ILang | string | undefined
): string => {
    const language = localStorage.getItem('language') || 'fr';

    if (typeof content === 'string') return content;
    else if (content) return content[language] || content.en || content.fr;
    else return '';
};

const Lang = ({ name, content }: PropsType): JSX.Element => {
    if (content) {
        return <>{LangStringFromILang(content)}</>;
    } else if (name) {
        return <>{LangString(name)}</>;
    } else {
        return <></>;
    }
};

export default Lang;
