import "./KonnectDetails.scss";
import konnectIntro from "../../assets/images/konnect-intro.jpg";

function KonnectDetails() {

    return (
        <section className="konnect-details">
            <div className="konnect-details__center-wrap">
                <img src={konnectIntro} alt="konnect logo" className="konnect-details__intro-image" />
                <section className="konnect-details__text-container">
                    <p className="konnect-details__title">Say hi to Konnect 👋, the innovative networking app that fosters genuine connections through simple clicks.</p>
                    <p className="konnect-details__subtitle">No more to superficial interactions, Konnect prioritizes meaningful and authentic connections, by matching individuals based on shared interests.</p>
                    <p className="konnect-details__subtitle">New updates are coming soon. 🤍</p>
                </section>
            </div>
        </section>
    )
}

export default KonnectDetails;