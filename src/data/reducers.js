import initial from "./initial";
import randInt from "random-int";

const reset = (state) => (
		
		{ ...state, team1Players : initial.team1Players, team2Players : initial.team2Players,  
			team1Experience : initial.team1Experience, team2Experience : initial.team2Experience}
	
);

const playerSubmission = (state, action) => (

	state.team1Players.length + state.team2Players.length < 10 ? 
	
	state.team1Experience <= state.team2Experience && state.team1Players.length < 5 ? 
	{...state, team1Players : [...state.team1Players, action.player], 
	team1Experience : state.team1Experience + +action.experience} :

	{...state, team2Players : [...state.team2Players, action.player], 
	team2Experience : state.team2Experience + +action.experience}

	: state
);

const team1Submission  = (state, action) => ({...state, team1Name : action.team1Name});
const team2Submission  = (state, action) => ({...state, team2Name : action.team2Name});

const reducer = (state, action) => {
    switch (action.type) {
    	
		case "reset": return reset(state);
		case "submitTeam1Name" : return team1Submission(state, action);
		case "submitTeam2Name" : return team2Submission(state, action);
		case "submitPlayer": return playerSubmission(state, action);
		        default:
		            return state;
	}
};

export default reducer;

//(state.team1Experience + 1) % randInt(1, 2) 


//fix submission of team names? + default value
//randInt(0, 1) === 0 && state.team1Players.length < 5 