import { connect } from 'react-redux'
import Thermometer from './Thermometer'

const mapStateToProps = state => {
  return {
    xp: state.team2Experience
  }
}

export default connect(mapStateToProps, null)(Thermometer)
