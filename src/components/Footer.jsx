import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
const navLinks = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/portfolio", label: "Portefolio" },
    { to: "/contact", label: "Contact" },
    { to: "/legalnotice", label: "Mentions Légales" },
    
];

const realisations = [
    { to: "/portfolio", label: "Fresh Food" },
    { to: "/portfolio", label: "Restaurant Akira" },
    { to: "/portfolio", label: "Espace bien-être" },
    { to: "/portfolio", label: "SEO" },
    { to: "/portfolio", label: "Création d'une API" },
    { to: "/portfolio", label: "Maquette d'un site" },
];

return (
    <footer className="bg-dark text-white py-5">
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md-4 mb-4">
                    <div>
                        <h3>John Doe</h3>
                        <p className="mb-0">40 rue Laure Diebold</p>
                        <p className="mb-0">69009 Lyon, France</p>
                        <p className="mb-0">10 20 30 40 50</p>
                        <p className="mb-0">john.doe@gmail.com</p>
                    </div>

                    <div className="text-left pt-3">
                        <a href="https://github.com/github-john-doe" target="_blank" rel="noreferrer" className="social-media me-3">
                            <BsGithub size={24}/>
                        </a>
                        <a href="https://x.com/?lang=fr" target="_blank" rel="noreferrer" className="social-media me-3">
                            <BsTwitterX size={24}/>
                        </a>
                        <a href="https://www.linkedin.com/in/john-doe" target="_blank" rel="noreferrer" className="social-media me-3">
                            <BsLinkedin size={24}/>
                        </a>
                    </div> 
                </div>

                <div className="col-12 col-md-4 mb-4">
                    <h3>Liens utiles</h3>
                    <ul className="list-unstyled">
                        {navLinks.map((link) => (
                            <li key={link.to}>
                                <Link className="footer-link text-white text-decoration-none" to={link.to} target="_blank" rel="nofollow noopener noreferrer">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="col-12 col-md-4 mb-4">
                    <h3>Mes dernières réalisations</h3>
                    <ul className="list-unstyled">
                        {realisations.map((link) => (
                            <li key={link.label}>
                                <Link className="footer-link text-white text-decoration-none" to={link.to} target="_blank" rel="nofollow noopener noreferrer">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    </footer>
)
}

export default Footer;