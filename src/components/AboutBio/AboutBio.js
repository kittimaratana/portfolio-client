import "./AboutBio.scss";
import profile from "../../assets/images/profile.jpg";

function AboutBio() {

    return (
        <section class="about-bio">
            <section class="about-bio__center-wrap">
                <h1 class="about-bio__title">I'm Kittima</h1>
                <section class="about-bio__details">
                    <section class="about-bio__image-container">
                        <img src={profile} alt="profile" class="about-bio__image"/>
                    </section>
                    <section class="about-bio__intro-container">
                        <h2 class="about-bio__intro-title">I'm a lover in all things programming and machine learning with a creative and growth mindset.</h2>
                        <p class="about-bio__intro-bio">Over the past 7 years, I've worked and interned in various areas of technology ⚙️ from full stack developer, analyst, and data scientist in numerous industries.</p>
                        <p class="about-bio__intro-bio">After completing additional software engineering studies, I am now looking for software engineering roles with higher development focus.👩‍💻</p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default AboutBio;