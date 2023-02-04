import ILang from '../Lang/ILang';

interface IIcon {
    label: ILang | string;
    title?: ILang | string;
    icons?: { src: string; href?: string }[];
}

export default IIcon;
