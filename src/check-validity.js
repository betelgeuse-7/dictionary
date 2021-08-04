import { LANGUAGES } from "./languages"

export const checkValidity = data => {
    if (data.word.trim().length === 0) return false
    if (data.language.trim().length === 0) return false

    if (!checkLanguageValidity(data.language)) return false

    return true
}

// check language value is valid (en_US, tr, ko, etc.)
const checkLanguageValidity = language => {
    for (let i = 0; i < LANGUAGES.length; i++) {
        // index 1 is for language code. ["English (United States)", "en_US"]
        if (language === LANGUAGES[i][1]) return true
    }
    return false
}
