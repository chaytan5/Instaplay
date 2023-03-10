import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
	const [searchParams] = useSearchParams();
	const id = searchParams.get("v");

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(closeMenu());
	}, []);

	return (
		<div className="py-5 px-4">
			<div>
				<iframe
					width="1000"
					height="500"
					src={`https://www.youtube.com/embed/${id}`}
					title="YouTube video player"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
					allowFullScreen
				></iframe>
			</div>
			<CommentsContainer />
		</div>
	);
};

export default WatchPage;
