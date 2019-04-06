import { connect } from "react-redux";
import StartScreen from "./StartScreen";
import { handleTeamsSubmisson } from "../../data/stateActions";
import history from "../../data/history";

const mapDispatchToProps = dispatch => {
	return{	
		onSubmit: data => { 
			dispatch(handleTeamsSubmisson(data));
			history.push("/draft-screen");	
		},		
	};
};

export default connect(null, mapDispatchToProps)(StartScreen);

//now move to reducer and update team submission function and players function