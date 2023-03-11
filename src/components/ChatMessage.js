import React from "react";

const ChatMessage = ({ message: { name, message } }) => {
	// const { name, message } = messages;
	return (
		<div className="flex items-center gap-2 p-1">
			<div className="flex-none">
				<img
					className="h-8 "
					src="https://cdn-icons-png.flaticon.com/512/6522/6522516.png"
					alt="user thumbnail"
				/>
			</div>

			<div>
				<span className="font-semibold">{name}</span>
				<span className="block">{message}</span>
			</div>
		</div>
	);
};

export default ChatMessage;
