import React from "react"

export default function PartOfSpeech({ partOfSpeech }) {
    return (
        <div className="part-of-speech">
            Part of speech:
            {/** api returns "undefined" sometimes */}
            <strong className="part-of-speech-data">{partOfSpeech}</strong>
        </div>
    )
}
