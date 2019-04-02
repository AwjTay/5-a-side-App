import React, { Component } from "react";

class StartScreen extends Component {
	constructor(props){
		super(props);
		this.state = {
			team1Name : "Team 1",
			team2Name : "Team 2",
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
		}
	}


	handleClick(e){
		e.preventDefault();
		this.props.onSubmit(this.state)
	}

	render(){
		return(
			<React.Fragment>

				<form>
					<div className="col-xs-6">
						<label htmlFor="teamname">Enter Team Name</label>
						<input onChange={ this.handleChange } type="input" id="team-one-name" value={ this.state.team1Name }/>
					</div>

					<div className="col-xs-6">
						<label htmlFor="teamname">Enter Team Name</label>
						<input onChange={ this.handleChange } type="input" id="team-two-name" value={ this.state.team2Name }/>
					</div>
				</form>

				<button onClick={ this.handleClick } className="btn-warning">Start Draft</button>


			</React.Fragment>
		)
	}

}

export default StartScreen;