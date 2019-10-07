import React from "react";

import "./Components.css";

class Markdown extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			input: "",
			output: ""
		};
		this.cleanInput = this.cleanInput.bind(this);
		this.cleanOutput = this.cleanOutput.bind(this);
		this.codifyEnglishWords = this.codifyEnglishWords.bind(this);
		this.onInputChange = this.onInputChange.bind(this);
	}

	cleanInput() {
		this.setState(state => {
			return {
				input: ""
			};
		});
	}

	cleanOutput() {
		this.setState(state => {
			return {
				output: ""
			};
		});
	}

	codifyEnglishWords() {
		this.setState(state => {
			return {
				output: state.input
			};
		});
	}

	onInputChange(event) {
		if(event.target != null) {
			var value = event.target.value;
			this.setState(state => {
				return {
					input: value
				};
			});
		}
	}

	render() {
		return (
			<div class="Page">
				<div class="Fields">
					<textarea class="Field" value={this.state.input} onChange={this.onInputChange}></textarea>
					<textarea class="Field" value={this.state.output} readOnly />
				</div>
				<div class="Buttons">
					<button class="ActionButton" onClick={this.cleanInput}>
						Clean Input
					</button>
					<button class="ActionButton" onClick={this.cleanOutput}>
						Clean Output
					</button>
					<button class="ActionButton" onClick={this.codifyEnglishWords}>
						Codify English Words
					</button>
				</div>
			</div>
		);
	}
}

export default Markdown;