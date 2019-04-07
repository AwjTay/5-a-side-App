import { connect } from 'react-redux'
import TeamField from './TeamField'

const mapStateToProps = state => {
  return {
    teamPlayers: state.team1Players
  }
}

export default connect(mapStateToProps, null)(TeamField)
