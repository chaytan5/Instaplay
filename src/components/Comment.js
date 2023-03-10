import React from "react";

const Comment = ({ comment }) => {
	return (
		<div className="flex items-center gap-3 p-2 bg-gray-200 m-2 rounded-md">
			<img
				className="w-auto h-10 "
				src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
				alt="user icon"
			/>
			<div>
				<h4 className="font-medium">{comment.user}</h4>
				<p>{comment.text}</p>
			</div>
		</div>
	);
};

export default Comment;
