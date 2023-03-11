import React, { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
	let [text, setText] = useState(0);
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const prime = useMemo(() => {
		return findPrime(text);
	}, [text]);

	return (
		<div
			className={`w-96 h-96 m-10 p-4 border border-black ${
				isDarkTheme ? "bg-slate-600 text-white" : ""
			}`}
		>
			<h1 className="font-semibold text-xl mb-4">useMemo</h1>
			<div>
				<input
					className="w-[200px] p-2 border border-black text-black"
					type="text"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
				<div>{"prime no: " + prime}</div>
			</div>
			<br />
			<button
				className="p-2 bg-red-400 rounded-md"
				onClick={() => setIsDarkTheme(!isDarkTheme)}
			>
				Toggle theme
			</button>
		</div>
	);
};

export default Demo;
