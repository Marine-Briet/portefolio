import Accordion from "../components/Accordion";
import { BsPhone } from "react-icons/bs";
import { BsEnvelopeAt } from "react-icons/bs";
import { BsGeoAlt } from "react-icons/bs";
import { BsMap } from "react-icons/bs";
import { BsGlobe } from "react-icons/bs";

function LegalNotice() {
    return (
        <div className="container">
            <div className="col-12 col-md-8 mx-auto mb-4">
                <div className="text-center my-4">
                    <h1 className="d-inline-block fw-bold border-bottom border-primary border-3 pb-2">Mentions Légales</h1>
                </div>
                
                <Accordion title="Editeur du site" id="editeur">
                    <address>
                        <span className="fs-5">John Doe</span> <br />
                        <span><BsMap/> 40 rue Laure Diebold</span> <br />
                        <span><BsGeoAlt/> 69009 Lyon, France </span><br />
                        <span><BsPhone/> 10 20 30 40 50 </span><br />
                        <span><BsEnvelopeAt/> john.doe@gmail.com</span>
                    </address>
                </Accordion>
                <Accordion title="Hébergeur" id="hebergeur">
                    <span className="fw-bold fs-5">alwaysdata</span> <br />
                    <span>91 Rue du Faubourg Saint-Honoré, 75008 Paris </span><br />
                    <span className="d-block mt-1"><BsGlobe/> www.alwaysdata.com</span>
                </Accordion>
                <Accordion title="Crédits" id="credits">
                    <span className="fw-bold fs-5">Crédits</span> <br />
                    <span className="d-block">Ce site a été réalisé par John Doe, étudiant au <a href="www.centre-europeen-formation.fr/">Centre Européen de formation.</a></span> <br />
                    <span className="fst-italic d-block">Les images utilisées sur ce site sont libres de droits et ont été obtenues sur le site <a href="https://pixabay.com/fr/">Pixabay.</a></span> <br />
                    <span className="fst-italic">La favicon de ce site a été fournie par <a href="https://www.flaticon.com/de/kostenlose-icons/john-doe">John doe Icons erstellt von Freepik - Flaticon</a>.</span>
                </Accordion>
            </div>
        </div>
    );
}

export default LegalNotice;