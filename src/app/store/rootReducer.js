import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import localization from 'reducers/localizationReducer';

export default function createReducer() {
    return combineReducers({
        localization,
        router: routerReducer,
    });
}
