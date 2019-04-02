export const handlePlayerSubmisson = (player) => {

	return {
		type : "submitPlayer",
		player,
	};
}

export const handleTeam1Submisson = (team1Name) => {
	return {
		type : "submitTeam1Name",
		team1Name : team1Name, 
	};
} 

export const handleTeam2Submisson = (team2Name) => {
	return {
		type : "submitTeam2Name",
		team2Name : team2Name, 
	};
} 