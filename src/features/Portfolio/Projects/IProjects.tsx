import IProject from "./IProject";

interface ISchool {
    label: string;
    semesters?: ISemester[];
    projects?: IProject[];
}

interface ISemester {
    number: number;
    projects: IProject[];
}

interface IProjects {
    schoolProjects?: ISchool[];
    personalProjects?: IProject[];
}

export default IProjects;