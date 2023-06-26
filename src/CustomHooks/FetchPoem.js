import { useEffect, useState } from "react";
import Poems from "../Components/Poems";

const FetchPoem = () => {

    const [poemName, setPoemName] = useState(null)
    const [isFetching, setIsFetching] = useState(false)
    const [isError, setIsError] = useState(false)
    const [poem, SetPoem] = useState(null)


    const handleSubmit = (e) => {

        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form)
        const entry = Object.fromEntries(formData.entries())

        const searchRule = (poemName !== entry.poemName && entry.poemName.length > 2)

        if (entry.poemName.length < 3) {
            window.alert("Search must include at least 3 characters.")
        }

        if (searchRule) {
            setPoemName(entry.poemName);
            setIsFetching(true)
            setIsError(false)
        }
    }
    useEffect(() => {
        fetch(`https://poetrydb.org/title/${poemName}`)
            .then((res) => {
                return res.json()
            }).then((data) => {
                if (data.status !== 404) {
                    SetPoem(data)
                } else {
                    return Promise.reject("no result")
                }
                setIsFetching(false)
            }).catch((err) => {
                console.log(err);
                setIsFetching(false)
                setIsError(true)
            })

    }, [poemName])

    return (
        <>
            <div className="poem-search">
                <form action="post" onSubmit={handleSubmit}>
                    <label>
                        Type the name of the poem that you would like to search.
                        <br />
                        <br />
                        Poem name:
                        <input type="text" name="poemName" required={true} placeholder="The Raven" />
                        <button type='submit'> Search for poem(s) </button>
                    </label>
                </form>
            </div>

            {(isError && poemName !== null) && <h2 className="error-info">No results for {poemName} </h2>}

            {isFetching && <p className="poem"> Fetching your poem </p>}

            {(poem && !isError && !isFetching) && < Poems poems={poem} />}
        </>
    );
}

export default FetchPoem;