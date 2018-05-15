/**
 * Get language. Always use language from localStorage if exists. Fallback to browserlanguage if supported.
 * @return {string} languageCode - language code (ISO 639-1)
 */
export const getLanguage = () => {
    const supportedLanguages = ['en', 'sv'];
    const navigatorLanguage = navigator.language.substr(0, 2);
    const browserLanguage = supportedLanguages.indexOf(navigatorLanguage) === -1 ? FALLBACK_LANGUAGE : navigatorLanguage;

    let language = localStorage.getItem('@irecommend:language');

    return language === null ? browserLanguage : language;
}

/**
 * Store language in localStorage. New language has to be supported to be saved.
 * @param {string} languageCode - language code (ISO 639-1)
 */
export const setLanguage = (language) => {
    const supportedLanguages = ['en', 'sv'];
    const navigatorLanguage = navigator.language.substr(0, 2);

    if (supportedLanguages.indexOf(navigatorLanguage) !== -1) {
        localStorage.setItem('@irecommend:language', language);
    }
}