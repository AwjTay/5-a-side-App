export const handleFirstSubmisson = ({playerName, playerExperience}) => {

	return {

		type : "submitFirstPlayer",
		player : playerName,
		experience : playerExperience,
	}
};

export const handlePlayerSubmisson = ({playerName, playerExperience}) => {

	return {

		type : "submitPlayer",
		player : playerName,
		experience : playerExperience,
	}
};

export const handleReset = () => {

	return {
		type : "reset",
	}
};

export const handleTeamsSubmisson = ({team1Name, team2Name, teamsSize}) => {
	return {
		type : "submitTeams",
		team1Name,
		team2Name,
		teamsSize 
	}
}; 


