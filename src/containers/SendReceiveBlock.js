import React from 'react'
import euro from '../assets/img/euro.jpg';
import pound from '../assets/img/uk.png';
import Modal from '../components/Modal';
import { showSateModal } from '../actions';

const SendReceiveBlock = ({dispatch, currency, showModal}) => {
    return(
        <div className="currency-details">
            <h3>Let's set up your transaction!</h3>
            <p>Specify the amount to be sent or received.</p>
            <form className="currency-form">
                <label className="currency-label currency-active send">
                    You send
                    <br/>
                    <div className="currency">
                        <span className="currency-input">{currency.currencyFrom.symbol} {currency.currencyFrom.value}</span>
                        <div className="currency-symbol">
                            <img className="currency-img" src={euro} alt="currency" />
                            <span className="currency-name">{currency.currencyFrom.name}</span>
                        </div>
                    </div>
                </label>
                <label className="currency-label receive">
                    Receiver Gets
                    <br/>
                    <div className="currency">
                        <span className="currency-input">{currency.currencyTo.symbol} {currency.currencyTo.value}</span>
                        <div className="currency-symbol">
                            <img className="currency-img" src={pound} alt="currency" />
                            <span className="currency-name">{currency.currencyTo.name}</span>
                        </div>
                    </div>
                </label>
                <button className="next-button" type="button"
                    onClick={e => {
                        e.preventDefault()
                        dispatch(showSateModal(true))
                    }}
                >Next</button>
            </form>
            <Modal showModal={showModal}/>
        </div>
    )
}
export default SendReceiveBlock