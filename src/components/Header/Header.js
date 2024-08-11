import './Header.scss';
import { Link } from "react-router-dom";
import {useState} from "react";
import {FilterVintage, Menu} from '@mui/icons-material';
import SocialLinks from "../SocialLinks/SocialLinks";
import NavLinks from "../NavLinks/NavLinks";

//navigation section for site
function Header() {
    const [menuClick, setMenuClick] = useState(false);

    const handleMenuClick = () => {
        setMenuClick(!menuClick)
    }

    return (
        <header>
            <nav className="navigation">
                <div className="navigation__center-wrap">
                    <section className="navigation__bar">
                        <Link to={`/`} className="navigation__logo-container">
                            <FilterVintage className="navigation__logo-image" />
                            <section className="navigation__menu-container navigation__menu-container--tablet">
                                <NavLinks/>
                            </section>
                        </Link>
                        <section className="navigation__menu-image-container">
                            <Menu className="navigation__menu-image" onClick={handleMenuClick}/>
                        </section>
                        <section className="navigation__social-container navigation__social-container--tablet">
                            <SocialLinks/>
                        </section>
                    </section>
                    {menuClick && ( 
                        <section className="navigation__menu-container navigation__menu-container--mobile">
                                <NavLinks/>
                            <section className="navigation__social-container">
                                <SocialLinks/>
                            </section>
                        </section>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Header;