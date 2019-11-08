import React from "react";
import "./VideoItem.css";

const VideoItem = props => {
	return (
		<div
			onClick={() => props.videoSelected(props.content)}
			className="item video-item"
		>
			<img
				className="ui middle aligned image"
				src={props.content.snippet.thumbnails.high.url}
				alt={props.content.snippet.title}
			></img>
			<div className="content">
				<div className="header ui"> {props.content.snippet.title} </div>
			</div>
		</div>
	);
};

export default VideoItem;
