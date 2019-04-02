import React, { Component } from "react";

class StartScreen extends Component {
	constructor(props){
		super(props);
		this.state = {
			team1Name : "",
			team2Name : "",
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
			this.setState({team2Name : e.currentTarget.value})
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
						<input onChange={ this.handleChange } type="input" id="team-one-name" placeholder="Team 1"/>
					</div>

					<div className="col-xs-6">
						<label htmlFor="teamname">Enter Team Name</label>
						<input onChange={ this.handleChange } type="input" id="team-two-name" placeholder="Team 2"/>
					</div>
				</form>

				<button onClick={ this.handleClick } className="btn-warning">Start Draft</button>


			</React.Fragment>
		)
	}

}

export default StartScreen;