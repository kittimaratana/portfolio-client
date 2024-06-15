import './Header.scss';
import { Link } from "react-router-dom";
import {Email, FilterVintage, GitHub, LinkedIn} from '@mui/icons-material';

//navigation section for site
function Header() {
    return (
        <header>
            <nav className="navigation">
                <div className="navigation__center-wrap">
                    <section className="navigation__menu-container">
                        <Link to={`/`} className="navigation__logo-container">
                            <FilterVintage className="navigation__logo-image" />
                        </Link>
                        <Link to={`/about`} className="navigation__menu-item">
                            <p className="navigation__menu-text">Upload</p>
                        </Link>
                        <Link to={`/expertise`} className="navigation__menu-item">
                            <p className="navigation__menu-text">Expertise</p>
                        </Link>
                        <Link to={`/articles`} className="navigation__menu-item">
                            <p className="navigation__menu-text">Articles</p>
                        </Link>
                        <Link to={`/konnect`} className="navigation__menu-item">
                            <p className="navigation__menu-text">Konnect</p>
                        </Link>
                    </section>
                    <section className="navigation__menu-title">
                        <p>Kittima</p>
                    </section>
                    <section className="navigation__social-container">
                        <a href="https://www.linkedin.com/in/kittima-ratana/" className="navigation__social-item">
                            <LinkedIn className="navigation__social-image"/>
                        </a>
                        <a href="https://github.com/kittimaratana" className="navigation__social-item">
                            <GitHub className="navigation__social-image"/>
                        </a>
                        <a href="mailto:kittima.ratana@gmail.com" className="navigation__social-item">
                            <Email className="navigation__social-image"/>
                        </a>
                    </section>
                </div>
            </nav>
        </header>
    )
}

export default Header;