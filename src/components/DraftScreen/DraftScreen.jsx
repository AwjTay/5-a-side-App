import React, { Component } from "react";
import TeamField1 from "../TeamField/TeamField1";
import TeamField2 from "../TeamField/TeamField2";
import Thermometer1 from "../Thermometer/Thermometer1";
import Thermometer2 from "../Thermometer/Thermometer2";

class DraftScreen extends Component {
	constructor(props){
		super(props);

		this.state = {
			playerName : "",
			playerExperience : 10,
			errorMessage : "",
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
	}

	handleClick(e){
		e.preventDefault();
		if(!this.state.playerName){
			this.setState({ errorMessage : "Please enter a player name" })
		} else {
			let { team1Players, team2Players } = this.props;
			
			team1Players.length === 0 && team2Players.length === 0 ? this.props.onFirstSubmit(this.state) : this.props.onSubmit(this.state);
			this.setState({ playerName : "" })
			this.setState({ errorMessage : "" })
		}
		
	}

	render() {

		const { team1Players, team2Players, teamsSize, team1Xp, team2Xp, team1Name, team2Name } = this.props;

		return(

			<React.Fragment>

				<div className="teams_container">

					<div className="team_field1">
						<TeamField1 teamName ={ team1Name } />
						<div className="thermometer_one">
							<Thermometer1 />
						</div>
					</div>	

					<div className="team_field2">
						<TeamField2 teamName ={ team2Name } />
						<div className="thermometer_two">
							<Thermometer2 />
						</div>
					</div>	

				</div>
				<div className="reset_container">
					<button
						className="reset_button" 
						onClick={ () => this.props.reset() } 
						>Reset
					</button>
				</div>

				<form> 

					<div className="form_structure">

						{team1Players.length === teamsSize && team2Players.length === teamsSize ? 
						`Draft complete. ${team1Name} strength is ${team1Xp} and ${team2Name} is ${team2Xp}. Game on!` :
						
							<div>
								<label className="form_label" htmlFor="name">Enter Player Name</label>
								<input
									className="input_field" 
									onChange={ this.handleInputChange } 
									type="input" 
									id="name" 
									value={this.state.playerName} 
									placeholder="Player Name"
								/>
								<div>{this.state.errorMessage}</div>
							</div>

						}

					</div>

					<div className="form_structure">

						<label className="form_label" htmlFor="experience">Set Player Experience</label>
						<input

							className="slider" 
							onChange={ this.handleSliderChange } 
							id="experience" 
							type="range" 
							name="points" 
							min="1" 
							max="10" 
						/>
					</div>

					<button className="submit_button" onClick={ this.handleClick }>Submit Player</button>
					
				</form>
				
					<div className="nav_wrapper">
				      	<nav className="social_icons">			        
					        <a href="https://www.facebook.com/"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
					        <a href="https://www.whatsapp.com/"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg></a>
				        </nav>
			        </div>          			     
				
			</React.Fragment>
		)
	}
}

export default DraftScreen;

