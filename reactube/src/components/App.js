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
		this.setState({
			videolist: response.data.items,
			selectedVideo: response.data.items[0]
		});
	};

	videoSelected = selectedvid => {
		//const vid = selectedvid;
		this.setState({ selectedVideo: selectedvid });
	};

	componentDidMount() {
		this.onTermSubmit("awesome");
	}

	render() {
		console.log(this.state.selectedVideo);
		return (
			<div className="ui">
				<div className="ui container">
					<SearchBar onTermSubmit={this.onTermSubmit} />
				</div>

				<div style={{ marginTop: "20px" }}>
					<div className="ui centered grid">
						<div className="ui row">
							<div className="ten wide column">
								<Player video={this.state.selectedVideo} />
							</div>
							<div className="four wide column">
								<VideoList
									videolist={this.state.videolist}
									videoSelected={this.videoSelected}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
