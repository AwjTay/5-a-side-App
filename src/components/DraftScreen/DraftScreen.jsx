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

	}

	handleInputChange(e){
		this.setState({ playerName : e.currentTarget.value})
	}

	handleSliderChange(e){
		this.setState({ playerExperience : e.currentTarget.value})
	}

	render() {
		return(
			<React.Fragment>

				<TeamField1 teamName ="Team 1" />
				<TeamField2 teamName ="Team 2" />
				<form className="form-control">

					<div className="col-xs-6">
						<label htmlFor="name">Enter Player Name</label>
						<input type="input" id="name" placeholder="Player Name"/>
					</div>

					<div className="col-xs-6">
						<label htmlFor="experience">Set Player Experience</label>
						<input id="experience" type="range" name="points" min="1" max="10" />
					</div>

					<button>Submit Player</button>
					
				</form>
			</React.Fragment>
		)
	}


}

export default DraftScreen;