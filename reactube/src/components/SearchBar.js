import React from "react";

class SearchBar extends React.Component {
	state = { term: "" };

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onTermSubmit(this.state.term);
	};

	onInputChange = event => {
		this.setState({ term: event.target.value });
	};

	render() {
		return (
			<div className="ui segment" style={{ marginTop: "10px" }}>
				<form className="ui form" onSubmit={this.onFormSubmit}>
					<div className="field">
						<label>Video Search</label>
						<input
							className="input massive fluid"
							value={this.state.term}
							type="text"
							onChange={this.onInputChange}
						/>
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
