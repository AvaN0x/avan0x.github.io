import IEducation from './Educations/IEducation';
import ILanguage from './Languages/ILanguage';
import IPersonal from './Personal/IPersonal';

interface IAbout {
    personal: IPersonal;
    languages: ILanguage[];
    qualities: string[];
    educations: IEducation[];
}

export default IAbout;