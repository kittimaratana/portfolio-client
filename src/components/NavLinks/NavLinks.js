import './NavLinks.scss';
import { Link } from "react-router-dom";

function NavLinks() {
    return (
        <>
            <Link to={`/`} className="navigation__menu-text">Home</Link>
            <Link to={`/about`} className="navigation__menu-text">About</Link>
            <Link to={`/articles`} className="navigation__menu-text">Articles</Link>
            <Link to={`/konnect`} className="navigation__menu-text">Konnect</Link>
        </>
    )
}

export default NavLinks;