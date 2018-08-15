import React from 'react'
/* import { showSateModal } from '../actions' */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Modal = ( {dispatch, showModal}) =>{
    const showHideClassName = showModal ? "modal display-block" : "modal display-none";
    return(
        <div className={showHideClassName}>
            <section className="modal-main">
                <div className="modal-header">
                    <h3>
                    <FontAwesomeIcon icon="lock" /> Identity verification required

                    </h3>
                    <p>For your security, we ocassionally require you to verify your identity by entering a code sent to your mobile device.</p>
                </div>
                <div className="modal-body">
                    <h4>Enter the code sent via SMS to
                        <span className="country-code">+ 353 </span> <span className="verification-phone"> 872251177 </span>
                    </h4>
                    <form action="input-number">
                        <input className="input-field" type="text" name="name" />
                        <input className="input-field" type="text" name="name" />
                        <input className="input-field" type="text" name="name" />
                        <input className="input-field" type="text" name="name" />
                        <input className="input-field" type="text" name="name" />
                        <input className="input-field" type="text" name="name" />
                    </form>
                    <div className="modal-form-links">
                        <a className="left" href=""><FontAwesomeIcon className="icon" icon="redo" /></a><span>Receive new code</span>
                        <a className="right" href=""><FontAwesomeIcon className="icon" icon="phone" /></a><span> Receive code via call instead</span>
                    </div>
                </div>
                <div className="modal-footer">
                    <button className="verify-button inactive" type="button">Verify Identity</button>
                    <button className="back-button" type="button"
                        /* onClick={e => {
                            e.preventDefault()
                            dispatch(showSateModal(false))
                        }} */
                    >Back </button>
                    <a className="noaccess-mobile" href="">I can't access this mobile device</a>
                </div>

            </section>
        </div>
    )
}
export default Modal