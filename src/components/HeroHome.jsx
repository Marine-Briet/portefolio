import Modale from './Modale';

function HeroHome() {
    return (
        <div className="hero-home text-white">
                <div className="hero-content text-center">
                    <h1>Bonjour je suis John Doe</h1>
                    <h2>Développeur web full stack</h2>
                    <button type="button" data-bs-target="#githubModal" data-bs-toggle="modal" className="btn btn-danger">En savoir plus</button>
                </div>
                <Modale />
        </div>
    )
}

export default HeroHome;