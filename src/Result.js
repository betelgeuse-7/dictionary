import React from "react"
import Phonetics from "./word/Phonetics"
import PartOfSpeech from "./word/PartOfSpeech"
import Definition from "./word/Definition"
import Synonyms from "./word/Synonyms"
import ExampleSentence from "./word/ExampleSentence"

export default function Result({ results }) {
    const meanings = results[0].meanings
    console.log("RESULT JS MEANINGS: ", meanings)

    return (
        <div className="results">
            {meanings.map(m => {
                return (
                    <>
                        <PartOfSpeech partOfSpeech={m.partOfSpeech} />
                        {m.definitions.map(d => {
                            {
                                return (
                                    <>
                                        <Definition definition={d.definition} />
                                        <Synonyms synonyms={d.synonyms} />
                                        <ExampleSentence example={d.example} />
                                    </>
                                )
                            }
                        })}
                    </>
                )
            })}

            <Phonetics
                text={results[0].phonetics[0].text}
                audio={results[0].phonetics[0].audio}
            />
        </div>
    )
}
