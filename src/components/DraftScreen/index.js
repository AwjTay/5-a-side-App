import { connect } from "react-redux";
import DraftScreen from "./DraftScreen";
import { handleFirstSubmisson, handlePlayerSubmisson, handleReset } from "../../data/stateActions";

const mapStateToProps = state => {
	return {
		team1Name : state.team1Name,
		team2Name : state.team2Name,
		team1Players : state.team1Players,
		team2Players : state.team2Players,
		teamsSize : state.teamsSize,
		team1Xp : state.team1Experience,
		team2Xp : state.team2Experience,
	}
}


const mapDispatchToProps = dispatch => {
	return {
		onFirstSubmit: data => dispatch(handleFirstSubmisson(data)),
		onSubmit: data => dispatch(handlePlayerSubmisson(data)),
		reset: () => dispatch(handleReset()),

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DraftScreen);
