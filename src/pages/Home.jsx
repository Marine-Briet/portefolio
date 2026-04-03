import HeroHome from "../components/HeroHome";
import CardHome from "../components/CardHome";

function Home() {
    return (
        <div>
            <HeroHome />
            <div className="col-12 col-md-8 mx-auto my-5">
                <CardHome />
            </div>
        </div>
    )
}

export default Home;