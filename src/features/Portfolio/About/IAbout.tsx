import ILanguage from './Languages/ILanguage';
import IPersonal from './Personal/IPersonal';

interface IAbout {
    personal: IPersonal,
    languages: ILanguage[]
}

export default IAbout;