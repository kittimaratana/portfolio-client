import "./AboutPage.scss";
import AboutBio from "../../components/AboutBio/AboutBio";
import AboutEducation from "../../components/AboutEducation/AboutEducation";
import AboutWork from "../../components/AboutWork/AboutWork";
import AboutHobby from "../../components/AboutHobby/AboutHobby";

function AboutPage() {

    return (
        <main>
            <AboutBio/>
            <AboutWork/>
            <AboutEducation/>
            <AboutHobby/>
        </main>
    )
}

export default AboutPage;