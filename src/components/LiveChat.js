import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utils/helper";
import ChatMessage from "./ChatMessage";

const message = {
	name: "Chetan Arora",
	message: "This is the live chat feature in my youtube app!",
};

const LiveChat = () => {
	const dispatch = useDispatch();
	const chatMessages = useSelector((store) => store.chat.messages);

	const [liveMessage, setLiveMessage] = useState("");

	useEffect(() => {
		const i = setInterval(() => {
			// API polling
			console.log("API polling");

			dispatch(
				addMessage({
					name: generateRandomName(),
					message: generateRandomMessage(),
				})
			);

			return () => clearInterval(i);
		}, 4000);
	}, []);

	function submitHandler(e) {
		e.preventDefault();
		if (liveMessage === "") {
			alert("please enter a message");
			return;
		}
		dispatch(
			addMessage({
				name: "Chetan",
				message: liveMessage,
			})
		);
		setLiveMessage("");
	}

	return (
		<div className="ml-4 w-full h-[500px]">
			<div className="h-[10%] border border-black rounded-t-xl bg-white w-full">
				<h2 className="font-bold text-lg p-2">Live Chat</h2>
			</div>
			<div className=" p-2 border border-black w-full h-[80%]  bg-slate-100 overflow-y-auto flex flex-col-reverse ">
				{chatMessages.map((msg, i) => (
					<ChatMessage key={i} message={msg} />
				))}
			</div>
			<form className="h-[10%] " onSubmit={(e) => submitHandler(e)}>
				<input
					className="w-[80%] h-full p-2 rounded-bl-xl border border-gray-500"
					type="text"
					placeholder="Enter your message"
					value={liveMessage}
					onChange={(e) => setLiveMessage(e.target.value)}
				/>
				<button className="w-[20%] h-full bg-gray-700 text-white rounded-br-xl ">
					Send
				</button>
			</form>
		</div>
	);
};

export default LiveChat;
