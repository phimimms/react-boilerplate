import { UPDATE_LANGUAGE } from 'actions/actionTypes';
import initialState from 'store/initialState';
import { getApplicationTokens, getLanguageDirectionality } from 'util/localization';

export default function localizationReducer(state = initialState.localization, action) {
    switch (action.type) {
        case UPDATE_LANGUAGE.FAILURE:
            console.warn(`Unsupported language: ${action.languageCode}`);
            return state;
        case UPDATE_LANGUAGE.SUCCESS:
            return updateLocalizationState(action.languageCode);
        default:
            return state;
    }
}

/**
 * Returns the state representing the new language
 * @param   {String}    code    The code representing the new language
 * @return  {Object}
 */
function updateLocalizationState(code) {
    const directionality = getLanguageDirectionality(code);
    const tokens = getApplicationTokens();

    tokens.setLanguage(code);

    return { code, directionality, tokens };
}
