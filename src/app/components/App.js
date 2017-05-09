import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Provider } from 'react-redux';

import './App/App.scss';

class App extends Component {
    /**
     * Generates the HTML representation of the Component.
     * @return  {Element}   TODO
     */
    render() {
        const { store } = this.props;

        return (
            <Provider store={store}>
                <div className="App" />
            </Provider>
        );
    }
}

App.propTypes = {
    store: PropTypes.object.isRequired,
};

export default App;
