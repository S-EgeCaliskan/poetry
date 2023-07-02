import Search from "./Search";
import About from "./About";
import Favourites from "./Favourites";

const Home = ({ about, home, favourites }) => {

    return (
        <>
            {home && <Search />}
            {about && <About />}
            {favourites && <Favourites />}
        </>
    );
}

export default Home;