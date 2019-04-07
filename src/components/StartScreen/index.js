import { connect } from 'react-redux'
import StartScreen from './StartScreen'
import { handleTeamsSubmisson } from '../../data/stateActions'
import history from '../../data/history'

// dispatches action to submit team names, then navigates user to draft screen

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: data => {
      dispatch(handleTeamsSubmisson(data))
      history.push('/draft-screen')
    }
  }
}

export default connect(null, mapDispatchToProps)(StartScreen)
