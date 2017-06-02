import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';

import App from 'containers/App';
import configureStore from 'store/configureStore';
import initialState from 'store/initialState';

/* Create Redux Store */
const store = configureStore(initialState);

const renderApplication = (Component) => {
    render(
        <AppContainer>
            <Provider store={store}>
                <Component />
            </Provider>
        </AppContainer>,
    document.getElementById('root'),
    );
};

/* Render the Application */
renderApplication(App);

if (module.hot) {
    /* Enables React Hot Reloading */
    module.hot.accept('containers/App', () => {
        renderApplication(require('containers/App').default);
    });
}
