import Home from "./Home";

import menuhamburger from "../images/icons8-menu.svg"
import { useState } from "react";

const Navbar = () => {

    const [toggle, setToggle] = useState(false)
    const [home, setHome] = useState(true)
    const [about, setAbout] = useState(false)
    const [favourites, setFavourites] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    const handleHome = () => {
        if (!home) {
            setHome(true)
            setAbout(false)
            setFavourites(false)
        }
    }
    const handleAbout = () => {
        if (!about) {
            setAbout(!about)
            setHome(false)
            setFavourites(false)
        }
    }
    const handleFavourites = () => {
        if (!favourites) {
            setFavourites(!favourites)
            setAbout(false)
            setHome(false)
        }
    }

    return (
        <>
            <nav className="nav">
                <h2 onClick={handleHome} id="logo">Poetry</h2>

                <img src={menuhamburger}
                    id="navbar-toggle"
                    alt="collapsible menu icon"
                    onClick={handleToggle}
                    aria-label="menu" />
                <div id={!toggle ? "menu" : "menu-toggled"}>
                    <ul className="menu-list">
                        <li>
                            <p onClick={handleHome} id={home ? "active" : ""}>Home</p>
                        </li>
                        <li>
                            <p onClick={handleAbout} id={about ? "active" : ""}>About</p>
                        </li>
                        <li>
                            <p onClick={handleFavourites} id={favourites ? "active" : ""}>Favourites</p>
                        </li>
                    </ul>
                </div >


            </nav>

            <Home home={home} about={about} favourites={favourites} />

        </>
    );
}

export default Navbar;
export { };