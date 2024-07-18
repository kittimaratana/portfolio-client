import "./ExpertiseOverview.scss";
import { Computer, Storage, Analytics, MoreVert, Code} from '@mui/icons-material';

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
                        <section className="expertise__description-container">
                            <section className="expertise__description-logo-container">
                                <Code className="expertise__description-logo"/>
                                <MoreVert className="expertise__description-logo"/>
                                <div className="expertise__description-logo expertise__description-logo--tablet">
                                    <MoreVert/>
                                </div>
                                <Code className="expertise__description-logo"/>
                            </section>
                            <section className="expertise__description">Proficient in UI/UX and modern frameworks in JavaScript, React, React Native, CSS, and SASS.</section>
                        </section>
                    </section>
                    <section className="expertise__item">
                        <section className="expertise__header">
                            <Storage className="expertise__logo" />
                            <section className="expertise__subtitle">Backend Development</section>
                        </section>
                        <section className="expertise__description-container">
                            <section className="expertise__description-logo-container">
                                <Code className="expertise__description-logo"/>
                                <MoreVert className="expertise__description-logo"/>
                                <div className="expertise__description-logo expertise__description-logo--tablet">
                                    <MoreVert/>
                                </div>
                                <Code className="expertise__description-logo"/>
                            </section>
                            <section className="expertise__description">Experience in OOP and scalable backend system: Python, Java, JavaScript, SQL, and C.</section>
                        </section>
                    </section>
                    <section className="expertise__item">
                        <section className="expertise__header">
                            <Analytics className="expertise__logo" />
                            <section className="expertise__subtitle">AI/ML & Cloud</section>
                        </section>
                        <section className="expertise__description-container">
                            <section className="expertise__description-logo-container">
                                <Code className="expertise__description-logo"/>
                                <MoreVert className="expertise__description-logo"/>
                                <div className="expertise__description-logo expertise__description-logo--tablet">
                                    <MoreVert/>
                                </div>
                                <Code className="expertise__description-logo"/>
                            </section>
                            <section className="expertise__description">Skilled in various models like unsupervised, supervised, deep learning, NLPs, and gen AI.</section>
                        </section>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default ExpertiseOverview;