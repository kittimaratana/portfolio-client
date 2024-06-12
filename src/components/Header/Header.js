import './Header.scss';
import { Link } from "react-router-dom";
import FilterVintageIcon from '@mui/icons-material/FilterVintage';

//navigation section for site
function Header() {
    return (
        <header>
            <nav className="navigation">
                <div className="navigation__center-wrap">
                    <Link to={`/`} className="navigation__logo-container">
                        <img src={FilterVintageIcon} alt="logo" className="navigation__logo-image" />
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header;