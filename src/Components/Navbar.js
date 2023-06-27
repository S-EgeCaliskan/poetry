import About from "./About";
import Favourites from "./Favourites";
import menuhamburger from "../images/icons8-menu.svg"
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {

    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

    return (
        <nav className="nav">
            <h2>Poetry</h2>

            <img src={menuhamburger}
                id="navbar-toggle"
                alt="collapsible menu icon"
                onClick={handleToggle}
                aria-label="menu" />
            <div id={toggle ? "menu" : "menu-toggled"}>
                <ul className="menu-list">
                    <li>
                        <About />
                    </li>
                    <li>
                        <Favourites />
                    </li>
                </ul>
            </div >


        </nav>
    );
}

export default Navbar;