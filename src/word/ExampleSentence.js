import React from "react"

export default function ExampleSentence({ example }) {
    return <quote>{example ? example : ""}</quote>
}
