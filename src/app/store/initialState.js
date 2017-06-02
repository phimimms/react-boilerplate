import { getApplicationTokens, getLanguageDirectionality } from 'util/localization';

const tokens = getApplicationTokens();
const languageCode = tokens.getInterfaceLanguage();

export default {
    localization: {
        /**
         * The code of the application language
         * @type {String}
         */
        code: languageCode,
        /**
         * The directionality of the application language
         * @type {String}
         */
        directionality: getLanguageDirectionality(languageCode),
        /**
         * The localized static text of the application
         * @type {Object}
         */
        tokens,
    },
};
