import React, { Component } from "react";

class StartScreen extends Component {
	constructor(props){
		super(props);
		this.state = {
			team1Name : "Team 1",
			team2Name : "Team 2",
			teamsSize : 5,
		}

		this.handleChange = this.handleChange.bind(this);
		this.handleClick = this.handleClick.bind(this);

	}


	handleChange(e){
		switch (e.currentTarget.id) {
			case "team-one-name" :
			this.setState({ team1Name : e.currentTarget.value })
			break;
			case "team-two-name" :
			this.setState({team2Name : e.currentTarget.value })
			break;
			case "teams-size" :
			this.setState({teamsSize : +e.currentTarget.value})
			break;
			default: 
			return null;
		}
	}


	handleClick(e){
		e.preventDefault();
		this.props.onSubmit(this.state)
	}

	render(){
		return(
			<React.Fragment>

				<h2 className="app_title">Dream Draft</h2>
				<h4 className="strap_line">Randomise and Balance Teams</h4>

				<form className="start_form">
					<div className="form_structure">
						<label htmlFor="team one name">Enter Team Name</label>
						<input className="input_field" onChange={ this.handleChange } type="input" id="team-one-name" value={ this.state.team1Name }/>
					</div>

					<div className="form_structure">
						<label htmlFor="team two name">Enter Team Name</label>
						<input className="input_field" onChange={ this.handleChange } type="input" id="team-two-name" value={ this.state.team2Name }/>
					</div>

					<div className="form_structure">
						<label htmlFor="team size">Select a size for both teams</label>
						<input className="input_field" onChange={ this.handleChange } type="number" min="3" max="11" id="teams-size" value={ this.state.teamsSize }/> 
					</div>

					<button onClick={ this.handleClick } className="form_structure submit_button">Start Draft</button>
				</form>
			</React.Fragment>
		)
	}

}

export default StartScreen;