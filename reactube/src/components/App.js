import React from "react";
import SearchBar from "./SearchBar";
import youtube from "../apis/Youtube";
import VideoList from "./VideoList";
import Player from "./Player";

class App extends React.Component {
	state = { videolist: [], selectedVideo: null };

	onTermSubmit = async term => {
		const response = await youtube.get("/search", {
			params: {
				q: term
			}
		});
		this.setState({ videolist: response.data.items });
	};

	videoSelected = selectedvid => {
		//const vid = selectedvid;
		this.setState({ selectedVideo: selectedvid });
	};

	render() {
		console.log(this.state.selectedVideo);
		return (
			<div className="ui container">
				<SearchBar onTermSubmit={this.onTermSubmit} />
				<Player video={this.state.selectedVideo} />
				<VideoList
					videolist={this.state.videolist}
					videoSelected={this.videoSelected}
				/>
			</div>
		);
	}
}

export default App;
