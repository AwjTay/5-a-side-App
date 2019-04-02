import { connect } from "react-redux";
import DraftScreen from "./DraftScreen";
import { handlePlayerSubmisson, handleReset } from "../../data/stateActions";

const mapStateToProps = state => {
	return {
		team1Name : state.team1Name,
		team2Name : state.team2Name,
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onSubmit: data => dispatch(handlePlayerSubmisson(data)),
		reset: () => dispatch(handleReset())

	}
}

export default connect(mapStateToProps, mapDispatchToProps)(DraftScreen);
