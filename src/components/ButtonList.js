import React from "react";

const tags = [
	"All",
	"News",
	"Sports",
	"Music",
	"Trending",
	"JavaScript",
	"React",
	"NodeJS",
	"MacBooks",
	"iPhone",
];

const ButtonList = () => {
	return (
		<div className="flex flex-wrap mt-3 mb-8">
			{tags.map((tag, idx) => (
				<div
					key={idx}
					className="bg-gray-200 text-sm w-fit h-fit px-2 py-1 mb-3 mr-4 rounded-md text-center cursor-pointer"
				>
					{tag}
				</div>
			))}
		</div>
	);
};

export default ButtonList;
