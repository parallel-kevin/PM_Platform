/**
 * Created by kevintestt on 2017/11/27.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import configureStore from '../store/configureStore'

import Home from '../container/home'

const store = configureStore();

class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Home />
            </Provider>
        )
    }

}

export default App;