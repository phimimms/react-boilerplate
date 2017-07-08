/**
 * Creates the failure, request, and success type derivatives
 * for the provided action type
 * @param  {String} type    The action type
 * @return {Object.<String, String>}
 */
function createActionType(type) {
    return {
        FAILURE: `${type}_FAILURE`,
        REQUEST: `${type}_REQUEST`,
        SUCCESS: `${type}_SUCCESS`,
    };
}

/* Localization */
export const UPDATE_LANGUAGE = createActionType('UPDATE_LANGUAGE');
