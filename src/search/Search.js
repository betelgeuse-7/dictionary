import React, { useState } from "react"
import LanguagePicker from "./LanguagePicker"
import SearchBar from "./SearchBar"
import { checkValidity } from "../check-validity"

export default function Search({ onGetSearchData }) {
    const [word, setWord] = useState("")
    const [language, setLanguage] = useState("")

    const handleSearchFormSubmit = e => {
        e.preventDefault()
        if (checkValidity(word, language)) {
            onGetSearchData({ word, language })
            console.log("valid")
        }
    }

    return (
        <form onSubmit={handleSearchFormSubmit} id="search-form">
            <LanguagePicker setNewLanguage={setLanguage} />
            <SearchBar setNewWord={setWord} />
        </form>
    )
}
