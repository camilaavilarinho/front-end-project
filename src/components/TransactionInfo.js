import React from 'react'
import Steps from './Steps'
import CurrencyBlock from '../containers/CurrencyBlock'

const TransactionInfo = () => {
    return (
        <div className="transaction-info">
            <Steps />
            <CurrencyBlock />
        </div>
    )
}

export default TransactionInfo