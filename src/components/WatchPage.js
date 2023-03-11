import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
	const [searchParams] = useSearchParams();
	const id = searchParams.get("v");

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(closeMenu());
	}, []);

	return (
		<div className="py-5 px-4 w-full">
			<div className="flex w-full">
				<div>
					<iframe
						className="rounded-xl"
						width="1000"
						height="500"
						src={`https://www.youtube.com/embed/${id}`}
						title="YouTube video player"
						allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
				<div className="w-full">
					<LiveChat />
				</div>
			</div>
			<div className="w-3/5 min-w-[500px]">
				<CommentsContainer />
			</div>
		</div>
	);
};

export default WatchPage;
