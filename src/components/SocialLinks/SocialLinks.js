import './SocialLinks.scss';
import {Email, GitHub, LinkedIn} from '@mui/icons-material';

function SocialLinks() {
    return (
        <>
            <a href="https://www.linkedin.com/in/kittima-ratana/" className="navigation__social-item">
                <LinkedIn className="navigation__social-image"/>
            </a>
            <a href="https://github.com/kittimaratana" className="navigation__social-item">
                <GitHub className="navigation__social-image"/>
            </a>
            <a href="mailto:kittima.ratana@gmail.com" className="navigation__social-item">
                <Email className="navigation__social-image"/>
            </a>
        </>
    )
}

export default SocialLinks;