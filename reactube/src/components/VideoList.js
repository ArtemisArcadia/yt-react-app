import React from "react";
import VideoItem from "./VideoItem";

const VideoList = props => {
	const renderedVideoList = props.videolist.map(video => {
		return (
			<VideoItem
				videoSelected={props.videoSelected}
				key={video.id.videoId}
				content={video}
			/>
		);
	});

	return (
		<div className="ui relaxed divided list animated">{renderedVideoList}</div>
	);
};

export default VideoList;
