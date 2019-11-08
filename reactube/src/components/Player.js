import React from "react";

const Player = ({ video }) => {
	if (!video) {
		return <div>Loading</div>;
	}

	const vidSrc = `https://youtube.com/embed/${video.id.videoId}`;

	return (
		<div>
			<div className="ui embed">
				<iframe title="video" src={vidSrc} />
			</div>
			<div className="ui segment">
				<h4 className="ui header huge"> {video.snippet.title} </h4>{" "}
				<p className="ui description">{video.snippet.description}</p>
			</div>
		</div>
	);
};

export default Player;
