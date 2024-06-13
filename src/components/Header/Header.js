import './Header.scss';
import { Link } from "react-router-dom";
import {FilterVintage} from '@mui/icons-material';

//navigation section for site
function Header() {
    return (
        <header>
            <nav className="navigation">
                <div className="navigation__center-wrap">
                    <Link to={`/`} className="navigation__logo-container">
                        <FilterVintage className="navigation__logo-image" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;