import { BsGithub, BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { Link } from 'react-router-dom';

function Footer() {
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
                    <a href="https://github.com/Marine-Briet" target="_blank" rel="noreferrer" className="text-white me-3">
                        <BsGithub size={24}/>
                    </a>
                    <a href="https://x.com/?lang=fr" target="_blank" rel="noreferrer" className="text-white me-3">
                        <BsTwitterX size={24}/>
                    </a>
                    <a href="https://www.linkedin.com/in/marine-briet-984359219/" target="_blank" rel="noreferrer" className="text-white me-3">
                        <BsLinkedin size={24}/>
                    </a>
                </div> 
            </div>

            <div className="col-12 col-md-4 mb-4">
                <h3>Liens utiles</h3>
                <ul className="list-unstyled">
                    <li><Link className="text-white text-decoration-none" to="/">Home</Link></li>
                    <li><Link className="text-white text-decoration-none" to="/services">Services</Link></li>
                    <li><Link className="text-white text-decoration-none" to="/portfolio">Portefolio</Link></li>
                    <li><Link className="text-white text-decoration-none" to="/contact">Contact</Link></li>
                    <li><Link className="text-white text-decoration-none" to="/legalnotice">Mentions Légales</Link></li>
                </ul>
            </div>

            <div className="col-12 col-md-4 mb-4">
                <h3>Mes dernières réalisations</h3>
                <ul className="list-unstyled">
                    <li><Link className="text-white text-decoration-none" to="/">Fresh Food</Link></li>
                    <li><Link className="text-white text-decoration-none" to="/">Restaurant Akira</Link></li>
                    <li><Link className="text-white text-decoration-none" to="/">Espace bien-être</Link></li>
                    <li><Link className="text-white text-decoration-none" to="/">SEO</Link></li>
                    <li><Link className="text-white text-decoration-none" to="/">Création d'une API</Link></li>
                    <li><Link className="text-white text-decoration-none" to="/">Maquette d'un site</Link></li>
                </ul>
            </div>

        </div>

        </div>
    </footer>
)
}

export default Footer;