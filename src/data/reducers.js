import initial from "./initial";
import randInt from "random-int";

const setInitial = () => initial;

let random = randInt(0, 1);

const playerSubmisson = (state, action) => randInt(0, 1) === 0 ? {...state, team1Players : [...state.team1Players, action.player]} : {...state, team2Players : [...state.team2Players, action.player]};


const reducer = (state, action) => {
    switch (action.type) {
    	
		case "reset": return setInitial();
		case "submitPlayer": return playerSubmisson(state, action)
		        default:
		            return state;
		    }
		};

export default reducer;