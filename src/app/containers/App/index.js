import PropTypes from 'prop-types';
import React from 'react';
import { asyncComponent } from 'react-async-component';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';

import { history } from 'store/configureStore';

import './styles.scss';

const App = ({ directionality }) => {
    const Home = asyncComponent({
        resolve: () => import('scenes/Home'),
    });

    return (
        <ConnectedRouter history={history}>
            <div className="App" dir={directionality}>
                <Route exact path="/" component={Home} />
            </div>
        </ConnectedRouter>
    );
};

App.propTypes = {
    directionality: PropTypes.string.isRequired,
};

function mapStateToProps(state) {
    return {
        directionality: state.localization.directionality,
    };
}

export default connect(mapStateToProps)(App);
