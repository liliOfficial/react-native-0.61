/**
 * @format
 */
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import React, { Component } from 'react';
import reducers from './src/reducers';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

class Main extends Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <App />
            </Provider>
        );
    }
}

AppRegistry.registerComponent(appName, () => Main);

// AppRegistry.registerComponent(appName, () => App);
