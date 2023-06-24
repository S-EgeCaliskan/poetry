const Poem = ({ poem, title }) => {
    return (
        <div className="poem">
            {
                poem.lines.map((line, i) => (
                    <p key={i}>{line}</p>
                ))
            }
        </div>
    );
}

export default Poem;