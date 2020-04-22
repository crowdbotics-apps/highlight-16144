/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';

import { NativeRouter } from 'react-router-native';


import Router from './src/routes/route'

import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native';

class App extends Component {
    state = {}
    render() {
        return (
            <>
                <StatusBar barStyle="dark-content" />
                <SafeAreaView>
                    <NativeRouter>
                        <View>
                            <Router />
                        </View>
                    </NativeRouter>
                </SafeAreaView>
            </>
        );
    }
}

export default App;

