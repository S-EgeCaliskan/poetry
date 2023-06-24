import { useEffect, useState } from "react";
import Poems from "./Poems";

const FetchPoet = () => {
    const [poems, setPoems] = useState(null)
    const [isFetching, setIsFetching] = useState(false)
    const [isError, setIsError] = useState(false)
    const [authorName, setAuthorName] = useState(null)

    const handleSubmit = (e) => {

        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form)
        const entry = Object.fromEntries(formData.entries())

        const searchRule = (authorName !== entry.authorName && entry.authorName.length > 2)

        if (entry.authorName.length < 3) {
            window.alert("Search must include at least 3 characters.")
        }
        if (searchRule) {
            setAuthorName(entry.authorName)
            setIsFetching(true)
            setIsError(false)
        }
    }

    useEffect(() => {
        const poemList = []
        fetch(`https://poetrydb.org/author/${authorName}`)
            .then(res => {
                return res.json()
            }).then(data => {
                data.map((item) =>
                    (poemList.push(item)))
                if (poemList.length > 250) {
                    throw new Error("Search terms too general");
                }
            }).then(() => {
                setPoems(poemList)
                setIsFetching(false)
            }).catch((err) => {
                console.log(err);
                setIsError(true)
                setIsFetching(false)
            })
    }, [authorName]);

    return (
        <>
            <div className="search-container">
                <div className="author-search">
                    <form action="post" onSubmit={handleSubmit}>
                        <label>
                            Poet name:
                            <input type="text" name="authorName" required={true} placeholder="Shakespeare" />
                            <button type='submit'> Search Poems </button>
                        </label>
                    </form>
                </div>
            </div >
            <br />
            <hr />

            {(isError && authorName !== null) && <h2 className="error-info">No results for {authorName} </h2>}

            {isFetching && <p className="poem"> Fetching your poem(s) </p>}

            {(poems && !isError && !isFetching) && < Poems poems={poems} />}

        </>
    );
}

export default FetchPoet;