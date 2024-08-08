import "./KonnectPage.scss";
import KonnectImage from "../../components/KonnectImage/KonnectImage";
import KonnectDetails from "../../components/KonnectDetails/KonnectDetails";
import OtherProjects from "../../components/OtherProjects/OtherProjects";

function KonnectPage() {

    return (
        <main>
            <KonnectImage/>
            <KonnectDetails/>
            <OtherProjects/>
        </main>
    )
}

export default KonnectPage;