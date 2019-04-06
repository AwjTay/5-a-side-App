import initial from "./initial";
import randInt from "random-int";

const reset = (state) => (
		
		{ ...state, team1Players : initial.team1Players, team2Players : initial.team2Players,  
			team1Experience : initial.team1Experience, team2Experience : initial.team2Experience}
	
);


const teamsSubmission  = (state, action) => ({...state, team1Name : action.team1Name, team2Name : action.team2Name, teamsSize : action.teamsSize});

const firstSubmission = (state, action) => {

	//called if both teams currently have no players - randomly assigns first player to either team

	if(randInt(0, 1) === 0){
		console.log("line 21")
		return(
			
			{...state, team1Players : [...state.team1Players, action.player], 
			team1Experience : state.team1Experience + +action.experience}
		);

	} else {
		console.log("line 29")
		return(
			
			{...state, team2Players : [...state.team2Players, action.player], 
			team2Experience : state.team2Experience + +action.experience}

		);
	}

}

const playerSubmission = (state, action) => {

	//called if one or both teams have players

	if((state.team2Experience > state.team1Experience && state.team1Players.length < state.teamsSize) || 
		(state.team2Players.length === state.teamsSize && state.team1Players.length < state.teamsSize)) {
		console.log("line 43")
		return (
			{...state, team1Players : [...state.team1Players, action.player], 
			team1Experience : state.team1Experience + +action.experience}
		);
	

	} else if ((state.team1Experience > state.team2Experience && state.team2Players.length < state.teamsSize) ||
		(state.team1Players.length === state.teamsSize && state.team2Players.length < state.teamsSize)) {
		console.log("line 51")
		return (
			{...state, team2Players : [...state.team2Players, action.player], 
			team2Experience : state.team2Experience + +action.experience}
		);
	

	} else if(state.team1Experience === state.team2Experience && state.team1Players.length < state.teamsSize && state.team2Players.length < state.teamsSize){
			console.log("line 59")
		//reaches this condition if both teams have value and are equal - randomly assigns next player

		return (

			randInt(0, 1) === 0 ? 
			
			{...state, team1Players : [...state.team1Players, action.player], 
			team1Experience : state.team1Experience + +action.experience} :

			//checks if both teams sizes are equal to selected team size - if so, stops draft by returning state 

			state.team1Players.length === state.teamsSize && state.team2Players.length === state.teamsSize ? null :
			
			{...state, team2Players : [...state.team2Players, action.player], 
			team2Experience : state.team2Experience + +action.experience}
		)
		
	} else {
		return state;
	}
}

const reducer = (state, action) => {
    switch (action.type) {
    	
		case "reset": return reset(state);
		case "submitTeams" : return teamsSubmission(state, action);
		case "submitFirstPlayer" : return firstSubmission(state, action);
		case "submitPlayer": return playerSubmission(state, action);
		        default:
		            return state;
	}
};

export default reducer;

