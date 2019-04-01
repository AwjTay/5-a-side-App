import { connect } from "react-redux";
import TeamField from "./TeamField";
import { handlePlayerSubmisson } from "../../data/stateActions";

const mapStateToProps = state => {
	return {
		teamPlayers : state.Team1Players
	}
}

export default connect(mapStateToProps, null)(TeamField);