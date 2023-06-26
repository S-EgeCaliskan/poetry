import FetchPoet from "../CustomHooks/FetchPoet";
import FetchPoem from "../CustomHooks/FetchPoem";
import { useState } from "react";

const Home = () => {
    const [toggle, setToggle] = useState(true)

    const handleToggle = () => {
        setToggle(!toggle)
    }
    return (
        <>
            <div className="search-selector" onClick={handleToggle}>
                {toggle && <>Search for Poems</>}
                {!toggle && <>Search for Poets</>}
            </div>
            <div className="search-field">
                {toggle && <FetchPoet />}
                {!toggle && <FetchPoem />}
            </div>
        </>
    );
}

export default Home;