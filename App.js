/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {T} from 'react-native';
import {createStore} from 'redux';
import {allReducers} from "./reducers";
import Navigator from "./components/Navigator";

let store = createStore(allReducers);

export default class App extends Component {
    render() {
        return (
            <Navigator/>
        );
    }

}

