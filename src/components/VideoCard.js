import React from "react";

const VideoCard = ({ data }) => {
	// console.log(data);
	const { snippet, statistics } = data;
	const { thumbnails, title, channelTitle } = snippet;
	return (
		<div className="w-[280px] h-auto cursor-pointer">
			<div>
				<img
					className="rounded-3xl"
					src={thumbnails?.high?.url}
					alt="thumbnail"
				/>
			</div>
			<h2 className="font-bold text-sm">{title}</h2>
			<h3 className="text-sm">{channelTitle}</h3>
			<h4 className="text-sm">{statistics?.viewCount} views</h4>
		</div>
	);
};

export default VideoCard;
