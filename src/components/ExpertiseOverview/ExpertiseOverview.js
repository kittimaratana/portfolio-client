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
                        <section className="expertise__description">gregergrenignerw</section>
                    </section>
                    <section className="expertise__item">
                        <section className="expertise__header">
                            <Storage className="expertise__logo" />
                            <section className="expertise__subtitle">Backend Development</section>
                        </section>
                        <section className="expertise__description">fewoufebwhofbefwu</section>
                    </section>
                    <section className="expertise__item">
                        <section className="expertise__header">
                            <Analytics className="expertise__logo" />
                            <section className="expertise__subtitle">AI/ML, Cloud & Collabs</section>
                        </section>
                        <section className="expertise__description">grnoeigniowegnowienvi</section>
                    </section>
                </section>
            </div>
        </section>
    )
}

export default ExpertiseOverview;