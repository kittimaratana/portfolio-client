import "./AboutBio.scss";
import profile from "../../assets/images/profile.jpg";

function AboutBio() {

    return (
        <section class="about-bio">
            <section class="about-bio__center-wrap">
                <h1 class="about-bio__title">I'm Kittima</h1>
                <section class="about-bio__details">
                    <section class="about-bio__image-container">
                        <img src={profile} alt="profile image" class="about-bio__image"/>
                    </section>
                    <section class="about-bio__intro-container">
                        <h2 class="about-bio__intro-title">I'm a perfect blend between software engineering, data scientist and business mindset based in Toronto</h2>
                        <p class="about-bio__intro-bio">Transitioning from data science to software engineering is my latest adventure. I graduated from the University of Toronto in industrial engineering and was amongst the first cohorts to specialize in artificial intelligence. I love problem-solving, whether it's participating in case competitions, tackling LeetCode questions, or brainstorming ideas to optimize day-to-day work with analytics, algorithms, and machine learning. ⚙️</p>
                        <p class="about-bio__intro-bio">Throughout my career, I've had some cool and unique opportunities. My internship experiences include researching abroad in Denmark 🇩🇰, working as a full-stack developer intern, and working cross-functionally to revamp how weather alerts are deployed to Canadians by designing the system architecture.</p>
                        <p class="about-bio__intro-bio">Post-graduation, my role evolved from a junior data analyst to a data scientist at the same rate that my love for programming increased. I was part of the pioneering team at Universal Music Canada 🎧, advancing music and tech by building products in the analytics and machine learning space.</p>
                        <p class="about-bio__intro-bio">I was offered a fully funded bootcamp through Brainstation 👩‍💻, and I decided to partake in the software engineering stream. As I graduate, I am excited to see what software engineering opportunities come my way.</p>
                        <p class="about-bio__intro-bio">In my spare time, I love to travel, workout, and sing. I'm also passionate about women's community building 👭. I've participated in Women in STEM conferences, raised money for literacy, and am currently a member at Monday Girl, which is an organization that empowers women through fostering lasting and supportive community.</p>
                    </section>
                </section>
            </section>
        </section>
    )
}

export default AboutBio;