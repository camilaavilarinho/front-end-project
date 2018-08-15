export const showSateModal = (showModal) => ({
    type: 'SHOW_MODAL',
    showModal
})

export const currencyFrom = (name, symbol, value) => ({
    type: 'CURRENCY_FROM',
    name,
    symbol,
    value
})

export const currencyTo = (name, symbol, value) => ({
    type: 'CURRENCY_TO',
    name,
    symbol,
    value
})