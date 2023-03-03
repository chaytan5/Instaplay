import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";

const VideoContainer = () => {
	const [videos, setVideos] = useState(null);

	useEffect(() => {
		getVideos();
	}, []);

	async function getVideos() {
		const data = await fetch(YOUTUBE_API_URL);
		const json = await data.json();
		setVideos(json.items);
	}

	// console.log(videos);
	return (
		<div className="flex flex-row flex-wrap shrink gap-5">
			{videos?.map((video) => (
				<VideoCard key={video.id} data={video} />
			))}

			{/* <VideoCard data={videos?.items[0]} /> */}
		</div>
	);
};

export default VideoContainer;
