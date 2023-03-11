import React from "react";
import CommentList from "./CommentList";

const commentData = [
	{
		user: "Chetan Arora",
		text: "lorem ipsum dolor etch teh jie jkdc jejk iqojq",
		replies: [
			{
				user: "Harshit",
				text: "lorem ipsum dolor etch teh jie jkdc jejk iqojq",
				replies: [
					{
						user: "Akshay",
						text: "lorem ipsum dolor etch teh jie jkdc jejk iqojq",
						replies: [
							{
								user: "Random person",
								text: "lorem ipsum dolor etch teh jie jkdc jejk iqojq",
								replies: [],
							},
						],
					},
				],
			},
			{
				user: "Chetan Arora",
				text: "lorem ipsum dolor etch teh jie jkdc jejk iqojq",
				replies: [
					{
						user: "Chetan Arora",
						text: "lorem ipsum dolor etch teh jie jkdc jejk iqojq",
						replies: [],
					},
				],
			},
		],
	},
	{
		user: "Chetan Arora",
		text: "lorem ipsum dolor etch teh jie jkdc jejk iqojq",
		replies: [],
	},
	{
		user: "Chetan Arora",
		text: "lorem ipsum dolor etch teh jie jkdc jejk iqojq",
		replies: [],
	},
	{
		user: "Chetan Arora",
		text: "lorem ipsum dolor etch teh jie jkdc jejk iqojq",
		replies: [],
	},
	{
		user: "Chetan Arora",
		text: "lorem ipsum dolor etch teh jie jkdc jejk iqojq",
		replies: [],
	},
];

const CommentsContainer = () => {
	return (
		<div className="mt-5 w-auto">
			<h2 className="font-bold text-2xl">Comments: </h2>
			<CommentList comments={commentData} />
		</div>
	);
};

export default CommentsContainer;
