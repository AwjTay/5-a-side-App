import { connect } from "react-redux";
import DraftScreen from "./DraftScreen";
import { handlePlayerSubmisson } from "../../data/stateActions";

const mapStateToProps = state => {
	return {
		playerName : state.playerName,
	}
}

const mapDispatchToProps = dispatch => {
	console.log("mango");
	return {
		onSubmit: player => dispatch(handlePlayerSubmisson(player))
	}
}


export default connect(null, mapDispatchToProps)(DraftScreen);


//should be dispatching submitted player name properly now (run some tests). Then, reducers need to correctly randomise and update state.