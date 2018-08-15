import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const TransactionDetails = () => {
    return(
        <div className="transaction-details">
            <div className="panel">
                <div className="panel-header"><p>Sending Details</p></div>
                <div className="sending-title details">
                    <table className="sending">
                        <tbody>
                            <tr className="row">
                                <td className="row-title">You send</td>
                                <td className="row-value">€2000.00</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="">
                    <table className="panel-header">
                        <tbody>
                        <tr className="row">
                                <td className="row-title">Receiving Details</td>
                                <td className="row-value"><a className="rec-details-link" href="">As of right now <FontAwesomeIcon icon="question-circle" /></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="receiving-details details">
                    <table className="receiving">
                        <tbody>
                            <tr className="row">
                                <td className="row-title">Rate</td>
                                <td className="row-value">0.86022</td>
                            </tr>
                            <tr className="row">
                                <td className="row-title">Fee</td>
                                <td className="row-value">£2.50</td>
                            </tr>
                            <tr className="row">
                                <td className="row-title">Delivery date</td>
                                <td className="row-value">25th November</td>
                            </tr>
                            <tr className="row">
                                <td className="row-title">Recipient gets</td>
                                <td className="row-value gets">£1717.94</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="panel-footer details"><p>You save <span className="saved"> £66.19</span> compared your bank!</p></div>
            </div>

        </div>
    )
}

export default TransactionDetails