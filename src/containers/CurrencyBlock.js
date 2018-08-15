import { connect } from 'react-redux'
import SendReceiveBlock from './SendReceiveBlock'

const mapStateToProps = (state) => ({
    showModal: state.showModal,
    currency: state.currency
})


const CurrencyBlock = connect(
    mapStateToProps
)(SendReceiveBlock)

export default CurrencyBlock