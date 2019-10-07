import React from "react";

import "./Components.css";

const regularExps = {
	codifyEnglishWordsInput: new RegExp(/([^!-~]|\b)([!-_a-~](?:[ -~]*[!-_a-~])?)([^!-~]|\b)/g),
	codifyEnglishWordsOutput: "$1`$2`$3"
};

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
				output: state.input.replace(
					regularExps.codifyEnglishWordsInput,
					regularExps.codifyEnglishWordsOutput)
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
			<div className="Page">
				<div className="Fields">
					<textarea className="Field" value={this.state.input} onChange={this.onInputChange}></textarea>
					<textarea className="Field" value={this.state.output} readOnly/>
				</div>
				<div className="Buttons">
					<button className="ActionButton" onClick={this.cleanInput}>
						Clean Input
					</button>
					<button className="ActionButton" onClick={this.cleanOutput}>
						Clean Output
					</button>
					<button className="ActionButton" onClick={this.codifyEnglishWords}>
						Codify English Words
					</button>
				</div>
			</div>
		);
	}
}

export default Markdown;