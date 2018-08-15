import React from 'react';
import { render } from 'react-dom'
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'

//import {showSateModal, currencyFrom} from './actions'

const initialState = {
    showModal: false,
    currency: {
        currencyFrom : {
            name: 'eur',
            symbol: '€',
            value: 2000
        },
        currencyTo : {
            name: 'gbp',
            symbol: '£',
            value: 1717.94
        }
    }
};

const store = createStore(reducer, initialState)
/* console.log(store.getState())
store.dispatch(showSateModal(true))
store.dispatch(currencyFrom({name: 'reais', value: 800}))
console.log(store.getState()) */

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
