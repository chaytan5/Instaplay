import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { openMenu } from "../utils/appSlice";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";

const Body = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(openMenu());
	});
	return (
		<div className="py-3 px-2">
			<ButtonList />
			<VideoContainer />
		</div>
	);
};

export default Body;
