import ILang from "../../../../components/Lang/ILang";

interface IEducation {
    date: {
        start: number,
        end: number
    }
    label: ILang | string,
    location: ILang | string,
    subtitle?: ILang | string
}

export default IEducation;