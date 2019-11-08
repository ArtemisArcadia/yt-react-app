import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/Youtube";

class App extends React.Component {
	state = { videolist: [] };

	onTermSubmit = async term => {
		const response = await youtube.get("/search", {
			params: {
				q: term
			}
		});
		this.setState({ videolist: response.data.items });
	};

	render() {
		return (
			<div className="ui container">
				<SearchBar onTermSubmit={this.onTermSubmit} />I have found{" "}
				{this.state.videolist.length} videos
			</div>
		);
	}
}

export default App;
