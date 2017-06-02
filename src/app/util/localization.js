import LocalizedStrings from 'react-localization';

import { directionality, staticText } from 'dictionary/language';

/**
 * Returns the localized static text of the application
 * @return  {Object}
 */
export function getApplicationTokens() {
    return new LocalizedStrings(staticText);
}

/**
 * Returns the directionality of the language corresponding to the given code
 * @param   {String}    code    The language code
 * @return  {String}
 */
export function getLanguageDirectionality(code) {
    switch (code) {
        default:
            return directionality.ltr;
    }
}
