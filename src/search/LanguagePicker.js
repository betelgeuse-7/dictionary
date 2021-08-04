import React from "react"
import { LANGUAGES } from "../languages"

export default function LanguagePicker({ setNewLanguage }) {
    return (
        <select onChange={e => setNewLanguage(e.target.value)}>
            <option></option>
            {LANGUAGES.map(l => {
                return (
                    <option key={l[1]} value={l[1]}>
                        {l[0]}
                    </option>
                )
            })}
        </select>
    )
}
