import HeroHome from "../components/HeroHome";
import CardHome from "../components/CardHome";

function Home() {
    return (
        <div>
            <HeroHome />
            <div className="my-5">
                <CardHome />
            </div>
        </div>
    )
}

export default Home;