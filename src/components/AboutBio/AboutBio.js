import "./AboutBio.scss";
import profile from "../../assets/images/profile.jpg";

function AboutBio() {

    return (
        <section class="about-bio">
            <section class="about-bio__center-wrap">
                <h1 class="about-bio__title">I'm Kittima</h1>
                <section class="about-bio__image-container">
                    <img src={profile} alt="profile image" class="about-bio__image"/>
                </section>
                <section class="about-bio__intro-container">
                    <h2 class="about-bio__intro-title">I'm a perfect blend between software engineering, data scientist and business mindset based in Toronto</h2>
                    <p class="about-bio__intro-bio">Talking about my bio...........</p>
                </section>
            </section>
        </section>
    )
}

export default AboutBio;