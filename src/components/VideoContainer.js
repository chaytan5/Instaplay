import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL, YOUTUBE_SHORTS_API_URL } from "../utils/constants";
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
		<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 ">
			{videos?.map((video) => (
				<Link to={`/watch?v=${video.id}`} key={video.id}>
					<VideoCard data={video} />
				</Link>
			))}
		</div>
	);
};

export default VideoContainer;
