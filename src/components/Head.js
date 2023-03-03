import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";

const Head = () => {
	// const isMenuOpen = useSelector((store) => store.app.isMenuOpen);
	// console.log(isMenuOpen);
	const dispatch = useDispatch();

	const menuClickHandler = () => {
		dispatch(toggleMenu());
	};

	return (
		<div className="flex flex-row p-2 justify-between items-center">
			<img
				onClick={() => menuClickHandler()}
				className="h-10 cursor-pointer"
				src="https://cdn-icons-png.flaticon.com/512/883/883806.png"
				alt="hamburger icon"
			/>
			<a href="/">
				<img
					className="ml-5 h-6 cursor-pointer"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
					alt="youtube logo"
				/>
			</a>

			<form className="flex flex-grow content-center justify-center">
				<input
					className="w-2/5 rounded-tl-full rounded-bl-full border-2 border-r-transparent py-2 px-3"
					type="text"
					name="search"
					id="search"
				/>
				<button className="border-2 bg-gray-100 rounded-tr-full rounded-br-full w-14 h-11 ">
					<div className="w-6 h-6">
						<img
							className="w-full h-full translate-x-3"
							src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
							alt="search icon"
						/>
					</div>
				</button>
			</form>

			<img
				className="h-10 cursor-pointer"
				src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
				alt="profile icon"
			/>
		</div>
	);
};

export default Head;
