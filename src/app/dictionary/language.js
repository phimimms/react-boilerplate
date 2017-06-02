/**
 * An enum of language directionalities
 * @readonly
 * @type    {Object}
 */
export const directionality = {
    ltr: 'ltr',
    rtl: 'rtl',
};

/**
 * The static text of the application
 * @readonly
 * @type    {Object}
 */
export const staticText = {
    'en-US': {},
};

/**
 * The list of supported languages
 * @readonly
 * @type    {Array.<String>}
 */
export const supportedLanguages = Object.keys(staticText);
