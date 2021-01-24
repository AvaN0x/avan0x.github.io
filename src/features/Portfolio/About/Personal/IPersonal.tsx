interface ILicense {
    ownLicense: boolean;
    ownVehicle: boolean;
}

interface IPersonal {
    firstname: string;
    lastname: string;
    dateofbirth: string;
    place: string;
    license?: {
        car?: ILicense;
    }
}

export default IPersonal;