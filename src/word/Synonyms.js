import React from "react"
import Synonym from "./Synonym"

export default function Synonyms({ synonyms }) {
    return (
        <ul className="synonyms">
            {synonyms ? synonyms.map(s => <Synonym synonym={s} />) : ""}
        </ul>
    )
}
