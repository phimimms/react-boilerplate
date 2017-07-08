/**
 * Creates the failure, request, and success type derivatives
 * for the provided action type
 * @param  {String} type    The action type
 * @return {Object.<String, String>}
 */
function createActionType(type) {
    return {
        [`${type}_FAILURE`]: `${type}_FAILURE`,
        [`${type}_REQUEST`]: `${type}_REQUEST`,
        [`${type}_SUCCESS`]: `${type}_SUCCESS`,
    };
}

/* Localization */
export const UPDATE_LANGUAGE = createActionType('UPDATE_LANGUAGE');
