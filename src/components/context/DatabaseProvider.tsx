import ILang from 'components/Lang/ILang';
import IIcon from 'components/LanguagesIcons/IIcon';
import Loading from 'components/Loading';
import IAbout from 'components/portfolio/About/IAbout';
import IProjects from 'components/portfolio/Projects/IProjects';
import { createContext, useContext, useEffect, useState } from 'react';

export type Database = {
    about?: IAbout;
    projects?: IProjects;
    icons?: { [id: string]: IIcon };
    langs?: { [id: string]: ILang };
};

const DatabaseContext = createContext<Database | undefined>(undefined);
export const useDatabase = () => useContext(DatabaseContext);

export default function DatabaseProvider({
    children,
}: {
    children?: JSX.Element;
}) {
    const [database, setDatabase] = useState<Database | undefined>(undefined);

    useEffect(() => {
        (async () => {
            const db = await (await fetch('/database.json')).json();
            setDatabase(db);
        })();
    }, []);

    return (
        <DatabaseContext.Provider value={database}>
            {children}
        </DatabaseContext.Provider>
    );
}
