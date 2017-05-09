import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';

import './index.scss';
import App from 'components/App';
import configureStore from 'store/configureStore';
import initialState from 'store/initialState';

const store = configureStore(initialState);

const renderApplication = (Component) => {
    render(
        <AppContainer>
            <Component
                store={store}
                />
        </AppContainer>,
    document.getElementById('app'),
    );
};

renderApplication(App);

if (module.hot) {
    module.hot.accept('components/App', () => {
        renderApplication(require('components/App').default);
    });
}
