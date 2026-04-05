import Accordion from "../components/Accordion";
import InfosContact from "../components/InfosContact";
import PageIntro from "../components/PageIntro";
import { BsGlobe } from "react-icons/bs";
import { Helmet } from 'react-helmet-async';

function LegalNotice() {
    return (
        <div className="container">
            <Helmet>
                <meta name="robots" content="noindex" />
            </Helmet>
            <div className="col-12 col-md-8 mx-auto mb-4">
                
                <PageIntro title="Mentions Légales" content="" />
                
                <Accordion title="Editeur du site" id="editeur">
                    <InfosContact />
                </Accordion>
                <Accordion title="Hébergeur" id="hebergeur">
                    <span className="fw-bold fs-5">alwaysdata</span> <br />
                    <span>91 Rue du Faubourg Saint-Honoré, 75008 Paris </span><br />
                    <span className="d-block mt-1"><BsGlobe/> <a href="https://www.alwaysdata.com/" target="_blank" rel="noopener noreferrer">www.alwaysdata.com</a></span>
                </Accordion>
                <Accordion title="Crédits" id="credits">
                    <span className="fw-bold fs-5">Crédits</span> <br />
                    <span className="d-block">Ce site a été réalisé par John Doe, étudiant au <a href="https://www.centre-europeen-formation.fr/" target="_blank" rel="noopener noreferrer">Centre Européen de formation.</a></span> <br />
                    <span className="fst-italic d-block">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/" target="_blank" rel="noopener noreferrer">Pixabay.</a></span> <br />
                    <span className="fst-italic">La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe" target="_blank" rel="noopener noreferrer">John doe Icons erstellt von Freepik - Flaticon</a>.</span>
                </Accordion>
            </div>
        </div>
    );
}

export default LegalNotice;