import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';

import Main from 'components/Main';

import './styles.scss';

const App = ({ directionality }) => {
    return (
        <div className="App" dir={directionality}>
            <Main />
        </div>
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
