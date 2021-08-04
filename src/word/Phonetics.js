import React from "react"

export default function Phonetics({ text, audio }) {
    return (
        <div className="phonetics">
            <pre>{text}</pre>
            <audio controls>
                <source src={audio} type="audio/mpeg" />
            </audio>
        </div>
    )
}
