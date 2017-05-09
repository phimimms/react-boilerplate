import PropTypes from 'prop-types';
import React from 'react';
import { Provider } from 'react-redux';

import './App/App.scss';

const App = ({ store }) => {
    return (
        <Provider store={store}>
            <div className="App" />
        </Provider>
    );
};

App.propTypes = {
    store: PropTypes.object.isRequired,
};

export default App;
