import Banner from "../components/Banner";
import PageIntro from "../components/PageIntro";
import ProjectCard from "../components/ProjectCard";


function Portefolio() {
    const structurePCard = "col-12 col-md-4 text-center mb-4";
    const titlePCard = "fw-bold fs-4 mt-2 mb-1";
    const contentPCard = "fs-6";
    const skillsPCard= "text-muted bg-light border-top rounded-bottom border-secondary-subtle mt-auto mb-0";

    
    
    return (
        <div className="portfolio-page">
            <Banner />
            <div className="container">
                <PageIntro title="Portfolio" content="Voici quelques unes de mes réalisations" />
                <div className="row my-5">
                    <div className={structurePCard}>
                        <ProjectCard title="Fresh Food" content="Site de vente de produits frais en ligne" skills="Site réalisé avec PHP et MySQL" src="/img/portfolio/fresh-food.jpg" alt="Fresh Food" titleClass={titlePCard} contentClass={contentPCard} skillsClass={skillsPCard}/>
                    </div>

                    <div className={structurePCard}>
                        <ProjectCard title="Restaurant Akira" content="Site de vente de produits frais en ligne" skills="Site réalisé avec WordPress" src="/img/portfolio/restaurant-japonais.jpg" alt="Restaurant Akira" titleClass={titlePCard} contentClass={contentPCard} skillsClass={skillsPCard} />
                    </div>

                    <div className={structurePCard}>
                        <ProjectCard title="Espace bien-être" content="Site de vente de produits frais en ligne" skills="Site réalisé avec LARAVEL" src="/img/portfolio/espace-bien-etre.jpg" alt="Espace bien-être" titleClass={titlePCard} contentClass={contentPCard} skillsClass={skillsPCard} />
                    </div>

                    <div className={structurePCard}>
                        <ProjectCard title="SEO" content="Amélioration du référencement d'un site e-commerce" skills="Utilisation des outils SEO" src="/img/portfolio/seo.jpg" alt="Mots assimilés à SEO" titleClass={titlePCard} contentClass={contentPCard} skillsClass={skillsPCard}/>
                    </div>

                    <div className={structurePCard}>
                        <ProjectCard title="Création d'un API" content="Création d'une API RESTFULL publique" skills="PHP - SYMFONY" src="/img/portfolio/coder.jpg" alt="Création d'un API" titleClass={titlePCard} contentClass={contentPCard} skillsClass={skillsPCard} />
                    </div>
                    
                    <div className={structurePCard}>
                        <ProjectCard title="Maquette d'un site web" content="Création du prototype d'un site" skills="Réalisé avec FIGMA" src="/img/portfolio/screens.jpg" alt="Maquette d'un site web" titleClass={titlePCard} contentClass={contentPCard} skillsClass={skillsPCard} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portefolio;