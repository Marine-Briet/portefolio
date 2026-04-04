import Banner from "../components/Banner";
import PageIntro from "../components/PageIntro";
import CardContact from "../components/CardContact";


function Contact() {
    return (
        <div className="contact-page">
            <Banner />

            <div className="col-12 col-md-8 mx-auto my-5">
                <PageIntro title="Contact" content="Pour me contacter en vue d'un entretien ou d'une future collaboration, merci de remplir le formulaire de contact." />
                <CardContact />
            </div>
        </div>
    );
}

export default Contact;