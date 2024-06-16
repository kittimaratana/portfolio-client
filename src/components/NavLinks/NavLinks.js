import './NavLinks.scss';
import { Link } from "react-router-dom";

function NavLinks() {
    return (
        <>
            <Link to={`/about`} className="navigation__menu-text">Upload</Link>
            <Link to={`/expertise`} className="navigation__menu-text">Expertise</Link>
            <Link to={`/articles`} className="navigation__menu-text">Articles</Link>
            <Link to={`/konnect`} className="navigation__menu-text">Konnect</Link>
        </>
    )
}

export default NavLinks;