import { useEffect, useState } from "react"
import Search from "./search/Search"
import Error from "./Error"
import Result from "./Result"

function App() {
    const [data, setData] = useState({})
    const [error, setError] = useState(false)
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(false)
    const [gotResults, setGotResults] = useState(false)

    const makeApiCall = () => {
        const API = `https://api.dictionaryapi.dev/api/v2/entries/${data.language}/${data.word}`
        setLoading(true)
        fetch(API)
            .then(res => {
                res.json()
            })
            .then(data => {
                setResults(data)
                setLoading(false)
                setGotResults(true)
            })
    }

    return (
        <div className="App">
            <Search onGetSearchData={setData} />
            {data.word && <div id="word">{data.word}</div>}
            {error && <Error>Invalid input</Error>}
            {loading && <div>Loading...</div>}
            {gotResults && <Result results={results} />}

            {/* Icon attribution */}
            <small style={{ fontSize: "10px" }}>
                <div>
                    Icons made by
                    <a
                        href="https://www.freepik.com"
                        title="Freepik"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Freepik
                    </a>
                    from
                    <a
                        href="https://www.flaticon.com/"
                        title="Flaticon"
                        target="_blank"
                        rel="noreferrer"
                    >
                        www.flaticon.com
                    </a>
                </div>
            </small>
        </div>
    )
}

export default App
