import "./ExpertiseOverview.scss";
import { Computer, Storage, Analytics } from '@mui/icons-material';

function ExpertiseOverview() {

    return (
        <section className="expertise">
            <div className="expertise__center-wrap">
                <h2 className="expertise__title">My Expertise</h2>
                <section className="expertise__container">
                    <section className="expertise__item">
                        <section className="expertise__header">
                            <Computer className="expertise__logo" />
                            <section className="expertise__subtitle">Frontend Development</section>
                        </section>
                        <section className="expertise__description">Strong background creating intuitive and user friendly interfaces. My expertise includes designing and implementing industry modern web frameworks using JavaScript, CSS/SASS, HTML, React and React Native tools.</section>
                    </section>
                    <section className="expertise__item">
                        <section className="expertise__header">
                            <Storage className="expertise__logo" />
                            <section className="expertise__subtitle">Backend Development</section>
                        </section>
                        <section className="expertise__description">Robust of programming languages like Python, Java, SQL, and C with over three years of hands-on experince creating and maintaining scalable backend systems. My expertise spans across efficient data handling, API development, and database management.</section>
                    </section>
                    <section className="expertise__item">
                        <section className="expertise__header">
                            <Analytics className="expertise__logo" />
                            <section className="expertise__subtitle">AI/ML & Cloud</section>
                        </section>
                        <section className="expertise__description">Extensive educational background and experiences building machine learning models and AI solutions. Expertise range from supervised and unsupervised learning, deep learning, natural language processing and generative AI across various applications.</section>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default ExpertiseOverview;