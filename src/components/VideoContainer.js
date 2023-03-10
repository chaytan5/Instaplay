import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../utils/constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

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

	return (
		<div className="flex flex-row flex-wrap shrink gap-3">
			{videos?.map((video) => (
				<Link to={`/watch?v=${video.id}`} key={video.id}>
					<VideoCard data={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
