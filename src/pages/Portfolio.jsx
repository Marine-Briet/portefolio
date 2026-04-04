import Banner from "../components/Banner";
import PageIntro from "../components/PageIntro";

function Portefolio() {
    return (
        <div className="portfolio-page">
            <Banner />
            <div className="container">
                <PageIntro title="Portfolio" content="Voici quelques unes de mes réalisations" />
            </div>
        </div>
    );
}

export default Portefolio;