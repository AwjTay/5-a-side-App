import React, { Component } from "react";
import TeamField1 from "../TeamField/TeamField1";
import TeamField2 from "../TeamField/TeamField2";

class DraftScreen extends Component {
	constructor(props){
		super(props);

		this.state = {
			playerName : "",
			playerExperience : 5,
		}

		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleSliderChange = this.handleSliderChange.bind(this);
		this.handleClick = this.handleClick.bind(this);

	}

	handleInputChange(e){
		this.setState({ playerName : e.currentTarget.value})
	}

	handleSliderChange(e){
		this.setState({ playerExperience : e.currentTarget.value})
		console.log(this.state.playerExperience);
	}

	handleClick(e){
		//this method should be scalable to handle player experience
		e.preventDefault();
		this.props.onSubmit(this.state)
		console.log(this.state)
	}

	render() {
		return(
			<React.Fragment>

				<TeamField1 teamName ={ this.props.team1Name } />
				<TeamField2 teamName ={ this.props.team2Name } />

				<form className="form-control"> 
					<div className="col-xs-6">
						<label htmlFor="name">Enter Player Name</label>
						<input onChange={ this.handleInputChange } type="input" id="name" placeholder="Player Name"/>
					</div>

					<div className="col-xs-6">
						<label htmlFor="experience">Set Player Experience</label>
						<input onChange={ this.handleSliderChange } id="experience" type="range" name="points" min="1" max="10" />
					</div>

					<button onClick={ this.handleClick }>Submit Player</button>
					
				</form>
			</React.Fragment>
		)
	}


}

export default DraftScreen;



/*
<TeamField1 teamName ={ this.props.team1Name } />
				<TeamField2 teamName ={ this.props.team2Name } />
				<form className="form-control"> 
*/