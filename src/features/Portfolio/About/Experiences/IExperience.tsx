import ILang from "../../../../components/Lang/ILang";

interface IExperience {
    date: {
        start: ILang | string,
        end: ILang | string
    }
    label: ILang | string,
    location: ILang | string,
    subtitle?: ILang | string
}

export default IExperience;