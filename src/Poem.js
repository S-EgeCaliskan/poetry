const Poem = ({ poems }) => {


    return (
        <>
            {poems.map((poem, i) => (
                <div className="poem" key={i}>
                    <h2>{poem.title}</h2>
                    <h3>{poem.author}</h3>
                    <div className="lines">{poem.lines.map((line, i) => (
                        <div key={i}>
                            {line}
                        </div>
                    ))}
                    </div>
                    <hr />
                </div>
            ))}
        </>
    );
}

export default Poem;

/*
        <div className="poem">
            <h2>{title}</h2>
            {poems.map((poem) => (
                <div key={title}>
                    {poem}
                </div>
            ))}
        </div>

*/


/* 

        <div className="poem">
            <h2>{title}</h2>
            {poems.map((poem) => (
                <div key={poem.title}>
                    {poem.map((lines, i) => (
                        console.log(lines)
                    ))}
                </div>
            ))}
            <hr />
        </div>

        */