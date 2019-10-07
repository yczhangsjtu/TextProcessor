import React from "react";

import "./Components.css";

class Markdown extends React.Component {
	render() {
		return (
			<div class="Page">
				<div class="Fields">
					<textarea class="Field"></textarea>
					<textarea class="Field" readOnly></textarea>
				</div>
				<div class="Buttons">
					<button class="ActionButton">Codify English Words</button>
				</div>
			</div>
		);
	}
}

export default Markdown;