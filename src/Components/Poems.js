import { Fragment, useState } from "react";
import Poem from "./Poem";

const Poems = ({ poems }) => {

    const [title, setTitle] = useState("")

    const handleClick = (poem) => {
        if (title === poem.title) {
            setTitle("")
        }
        if (title !== poem.title) {
            setTitle(poem.title)
        }
    }

    return (
        <>
            {poems.map((poem, i) => (
                <Fragment key={i}>
                    <div className="poem-container" onClick={() => handleClick(poem)}>
                        <h2>{poem.title}</h2>
                        <p>{poem.author}</p>
                    </div>
                    {(title === poem.title) && <Poem poem={poem} title={title} />}
                </Fragment>
            ))}
        </>
    );
}

export default Poems;
