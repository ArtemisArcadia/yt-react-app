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
				alt=""
			></img>
			<div className="content">
				<div className="header huge  ui"> {props.content.snippet.title} </div>
				<div className="description ui medium">
					{props.content.snippet.description}{" "}
				</div>
			</div>
		</div>
	);
};

export default VideoItem;
