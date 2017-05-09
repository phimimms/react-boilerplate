import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import createReducer from 'reducers/rootReducer';

export default function configureStore(initialState = {}) {
    const rootReducer = createReducer();

    const middlewares = [
        thunkMiddleware,
    ];

    if (process.env.NODE_ENV !== 'production') {
        middlewares.push(
            require('redux-immutable-state-invariant').default()
        );
    }

    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(...middlewares)
    );

    if (module.hot) {
        module.hot.accept('reducers/rootReducer', () => {
            store.replaceReducer(require('reducers/rootReducer').default());
        });
    }

    return store;
}
