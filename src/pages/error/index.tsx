import { LangString } from 'components/Lang/Lang';
import LangsList from 'components/Lang/LangsList';
import NavBar from 'components/layout/NavBar';
import Loading from 'components/Loading';

export default function ErrorPage() {
    return (
        <>
            <NavBar />
            <Loading
                title={LangString(LangsList.error_not_found_title)}
                subtitle={LangString(LangsList.error_not_found_subtitle)}
                allowClick
                noSpinning
            />
        </>
    );
}
