import React from "react";

const Head = () => {
	return (
		<div className="flex flex-row p-2 justify-between items-center">
			<img
				className="h-10 cursor-pointer"
				src="https://cdn-icons-png.flaticon.com/512/883/883806.png"
				alt="hamburger icon"
			/>
			<img
				className="ml-5 h-6  cursor-pointer"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
				alt="youtube logo"
			/>

			<form className=" flex-grow text-center">
				<input
					className="w-2/5 rounded-tl-full rounded-bl-full border-2 border-r-0 py-2 px-3"
					type="text"
					name="search"
					id="search"
				/>
				<button className="border-2  rounded-tr-full rounded-br-full py-2 px-3">
					Search
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
