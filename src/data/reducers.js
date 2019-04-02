import initial from "./initial";
import randInt from "random-int";

const setInitial = () => initial;

const playerSubmission = (state, action) => (
	randInt(0, 1) === 0 && state.team1Players.length < 5 ? 
	{...state, team1Players : [...state.team1Players, action.player]} : 
	{...state, team2Players : [...state.team2Players, action.player]}

);

const team1Submission  = (state, action) => ({...state, team1Name : action.team1Name});
const team2Submission  = (state, action) => ({...state, team2Name : action.team2Name});

const reducer = (state, action) => {
    switch (action.type) {
    	
		case "reset": return setInitial(state.team1Players, state.team2Players);
		case "submitTeam1Name" : return team1Submission(state, action);
		case "submitTeam2Name" : return team2Submission(state, action);
		case "submitPlayer": return playerSubmission(state, action);
		        default:
		            return state;
	}
};

export default reducer;


//fix submission of team names? + default value