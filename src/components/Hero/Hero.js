import './Hero.scss';
import hero from "../../assets/images/hero.png";

function Hero() {
    return (
        <section class="hero">
            <section class="hero__center-wrap">
                <section class="hero__image-container">
                    <img src={hero} alt="Hero" class="hero__image"/>
                    <div class="hero__overlay"></div>
                    <h1 class="hero__text">Kittima</h1>
                </section>
            </section>
        </section>
    )
}

export default Hero;