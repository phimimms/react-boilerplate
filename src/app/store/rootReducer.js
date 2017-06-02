import { combineReducers } from 'redux';

import localization from 'reducers/localizationReducer';

export default function createReducer() {
    return combineReducers({
        localization,
    });
}
