import { supportedLanguages } from 'dictionary/language';

import { UPDATE_LANGUAGE } from './actionTypes';

/**
 * Updates the application language to the language corresponding to the given code
 * @param   {String}    languageCode  The code of the new application language
 * @return  {Function}
 */
export function updateLanguage(languageCode) {
    return (dispatch) => {
        return new Promise((resolve) => {
            if (~supportedLanguages.indexOf(languageCode)) {
                /* Supported language */
                return resolve(dispatch(updateLanguageSuccess(languageCode)));
            }
            /* Unsupported language */
            return resolve(dispatch(updateLanguageFail(languageCode)));
        });
    };
}
function updateLanguageFail(languageCode) {
    return { type: UPDATE_LANGUAGE.FAILURE, languageCode };
}
function updateLanguageSuccess(languageCode) {
    return { type: UPDATE_LANGUAGE.SUCCESS, languageCode };
}
