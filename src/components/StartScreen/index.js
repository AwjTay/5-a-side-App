import { connect } from "react-redux";
import StartScreen from "./StartScreen";
import { handleTeam1Submisson, handleTeam2Submisson } from "../../data/stateActions";
import history from "../../data/history";

const mapDispatchToProps = dispatch => {
	return{	
		onSubmit: data => { 
			dispatch(handleTeam1Submisson(data.team1Name));
			dispatch(handleTeam2Submisson(data.team2Name));
			history.push("/draft-screen");	
		},		
	};
};

export default connect(null, mapDispatchToProps)(StartScreen);

