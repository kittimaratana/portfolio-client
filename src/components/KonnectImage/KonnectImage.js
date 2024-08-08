import "./KonnectImage.scss";
//import konnectBio from "../../assets/images/konnect-bio.jpg";
//import konnectEvent from "../../assets/images/konnect-event.jpg";
//import konnectLogo from "../../assets/images/konnect-logo.svg";
import konnectImage1 from "../../assets/images/pexels-fotios-photos-1655329.jpg";
import konnectImage2 from "../../assets/images/pexels-pnw-prod-7624982.jpg";
import konnectImage3 from "../../assets/images/pexels-josh-hild-1270765-4606770.jpg";

function KonnectImage() {

    return (
        <section className="konnect-image__container">
            <div className="konnect-image__center-wrap">
                <section className="konnect-image">
                    <img src={konnectImage1} alt="konnect logo" class="konnect-image__logo" />
                    <div className="konnect-image__logo-overlay"></div>
                    <section className="konnect-image__title-container">
                        <p className="konnect-image__title">Konnect</p>
                        <p className="konnect-image__subtitle">With Us</p>
                    </section>
                </section>
                <section className="konnect-image konnect-image--horizontal">
                    <img src={konnectImage2} alt="konnect logo" class="konnect-image__horizontal" />
                    <img src={konnectImage3} alt="konnect logo" class="konnect-image__horizontal" />
                </section>
            </div>
        </section >
    )
}

/*
            <section class="about-bio__image-container">
                <img src={konnectLogo} alt="profile image" class="about-bio__image"/>
            </section>
            <section class="about-bio__image-container">
                <img src={konnectBio} alt="profile image" class="about-bio__image"/>
            </section>
            <section class="about-bio__image-container">
                <img src={konnectEvent} alt="profile image" class="about-bio__image"/>
            </section>

*/


export default KonnectImage;