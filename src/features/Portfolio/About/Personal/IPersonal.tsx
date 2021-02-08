import ILang from "components/Lang/ILang";

interface ILicense {
    ownLicense: boolean;
    ownVehicle: boolean;
}

interface IPersonal {
    firstname: string;
    lastname: string;
    dateofbirth: string;
    place: ILang | string;
    license?: {
        car?: ILicense;
    }
}

export default IPersonal;