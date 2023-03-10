import React from "react";
import Comment from "./Comment";

const CommentList = ({ comments }) => {
	return (
		<div className="mt-2">
			{comments.map((comment, index) => (
				<div key={index}>
					<Comment comment={comment} />
					<div className="ml-5 pl-5 border-l-2 border-black">
						<CommentList comments={comment.replies} />
					</div>
				</div>
			))}
		</div>
	);
};

export default CommentList;
