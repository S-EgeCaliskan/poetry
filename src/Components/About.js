import poetryDB from "../images/poetryDB.png"
const About = () => {

    return (
        <>
            <div className="about-container">
                <div className="about">
                    <h2>About</h2>
                    <br />
                    <p>Poetry is a personal, open-source project I made to practice React. I've used PoetryDB as the poem database; however, there is no affiliation between the creator(s)/owner(s) if PoetryDB and myself. Poems and poets that can be searched for on this website are only the ones that have been registered into PoetryDB. As I do not own or maintain this database, I cannot 1) add/change any poemts/poets, 2) cannot guarantee that the API will continue to work in the future.</p>
                    <br />
                    <a href="https://github.com/S-EgeCaliskan/poetry"><p>The source code can be found on my GitHub.</p></a>
                    <br />
                    <p>Enjoy reading!</p>
                    <br />
                    <p>Developed by S. Ege Caliskan</p>
                </div>
                <div className="dbimg">
                    <img id="dbimg" src={poetryDB} alt="poetryDB's landing page" />
                    <br />
                    <a href="https://poetrydb.org/index.html"><p><i>poetryDB</i></p></a>
                    <br />
                </div>
            </div >
        </>
    );
}

export default About;