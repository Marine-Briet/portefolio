import InfosContact from "./InfosContact";

function CardContact() {
   const titleH2 = "border-bottom border-primary border-3 pb-2 mb-4";

    return (
        <div className="container shadow-lg rounded my-4">
            <div className="row">
                <div className="col-12 col-md-6 my-4 px-4">
                    <h2 className={titleH2}>Formulaire de contact</h2>
                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Votre nom" />
                    </div>

                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Votre adresse mail" />
                    </div>

                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Votre numéro de téléphone" />
                    </div>

                    <div className="mb-3">
                        <input type="text" className="form-control" placeholder="Sujet" />
                    </div>

                    <div className="mb-3">
                        <textarea className="form-control" rows="15" placeholder="Votre message"></textarea>
                    </div>

                    <div className="text-center">
                        <button className="btn btn-primary">Envoyer</button>
                    </div>
                </div>

                <div className="col-12 col-md-6 my-4 px-4">
                    <h2 className={titleH2}>Mes coordonnées</h2>
                    <InfosContact />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.058020415708!2d2.3023346118960824!3d48.87617047121505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66fc093ebd065%3A0xc02e08457a1927c0!2s40%20Rue%20Laure%20Diebold%2C%2075008%20Paris!5e0!3m2!1sfr!2sfr!4v1775316402360!5m2!1sfr!2sfr" width="100%" height="500" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="map"></iframe>
                </div>
            </div>
        </div>
    )
}



export default CardContact;