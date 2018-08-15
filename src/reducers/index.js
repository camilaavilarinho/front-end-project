import { combineReducers } from 'redux'

const showModal = (state = '', action) => {
    switch (action.type) {
        case 'SHOW_MODAL':
            return action.showModal
        default:
            return state
    }
}

const currency = (state = [], action) => {
    switch (action.type) {
        case 'CURRENCY_FROM':
            return {
                ...state,
                currencyFrom : action.name //TODO
            }
        case 'CURRENCY_TO':
            return {
                ...state,
                currencyTo : action.name //TODO
            }
        default:
            return state
    }
}

const reducer = combineReducers({
    showModal,
    currency
})

export default reducer