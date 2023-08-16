import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResult } from "../utils/searchSlice";

const Head = () => {
	const dispatch = useDispatch();

	const [searchQuery, setSearchQuery] = useState("");
	const [suggestions, setSuggestions] = useState([]);
	const [showSuggestions, setShowSuggestions] = useState(false);

	const cache = useSelector((store) => store.search);

	useEffect(() => {
		const timer = setTimeout(() => {
			// if present in cache then setSuggestion else getSearchSuggestions
			if (cache[searchQuery]) {
				setSuggestions(cache[searchQuery]);
			} else {
				getSearchSuggestions();
			}
		}, 200);

		return () => {
			clearTimeout(timer);
		};
	}, [searchQuery]);

	const getSearchSuggestions = async () => {
		// console.log("api call - " + searchQuery);
		const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
		const json = await data.json();
		setSuggestions(json[1]);

		// cache the new data from api call
		dispatch(
			cacheResult({
				[searchQuery]: json[1],
			})
		);
	};

	const menuClickHandler = () => {
		dispatch(toggleMenu());
	};

	return (
		<>
			<div className="flex flex-row gap-2 py-2 justify-between items-center">
				<img
					onClick={() => menuClickHandler()}
					className="h-7 cursor-pointer"
					src="https://cdn-icons-png.flaticon.com/512/883/883806.png"
					alt="hamburger icon"
				/>
				<a href="/">
					<img
						className="ml-5 h-6 cursor-pointer"
						src="instaplay.webp"
						alt="Instaplay logo"
					/>
				</a>

				<div className="flex flex-grow content-center justify-center">
					<input
						className="w-2/5 rounded-tl-full rounded-bl-full border-2 border-r-transparent py-2 px-3"
						type="text"
						name="search"
						id="search"
						placeholder="Search"
						onChange={(e) => setSearchQuery(e.target.value)}
						onFocus={() => setShowSuggestions(true)}
						onBlur={() => setShowSuggestions(false)}
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
				</div>

				<img
					className="h-10 cursor-pointer"
					src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
					alt="profile icon"
				/>
			</div>
			{showSuggestions && (
				<div
					className={`absolute top-14 left-20 right-0 ml-auto mr-auto w-1/3 bg-white rounded-2xl shadow-lg my-1  ${
						suggestions.length > 0 && "border py-2"
					} border-gray-300`}
				>
					<ul>
						{suggestions.map((s) => (
							<li
								key={s}
								className="flex px-2 py-1 items-center gap-2 hover:bg-gray-200 cursor-default  hover:overflow-clip"
							>
								<img
									className="w-auto h-4 aspect-square"
									src="https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/search-512.png"
									alt="search icon"
								/>
								{s}
							</li>
						))}
					</ul>
				</div>
			)}
		</>
	);
};

export default Head;
