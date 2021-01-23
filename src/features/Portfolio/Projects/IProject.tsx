interface IProject {
    label: string;
    objective?: string;
    features?: string[];
    techs: string[];
    links?: {
        github?: string;
        site?: string;
        youtube?: string
    };
    numberOfContributors?: number;
}

export default IProject;