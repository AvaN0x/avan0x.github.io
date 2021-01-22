import IEducation from './Educations/IEducation';
import IExperience from './Experiences/IExperience';
import ILanguage from './Languages/ILanguage';
import IPersonal from './Personal/IPersonal';
import ITechs from './Techs/ITechs';

interface IAbout {
    personal: IPersonal;
    languages: ILanguage[];
    qualities: string[];
    educations: IEducation[];
    experiences: IExperience[];
    techs: ITechs;
}

export default IAbout;