import React, { useRef, useState } from "react";

const Demo2 = () => {
	let x = 0;
	const [val, setVal] = useState(0);

	let z = useRef(0);

	console.log("rendering...");

	return (
		<div className="w-96 h-96 m-10 p-4 border border-black">
			<h1 className="font-semibold text-xl mb-4">useRef</h1>
			<div>
				<button
					className="p-2 m-4 bg-blue-300 rounded-md"
					onClick={() => {
						x = x + 1;
						console.log(x);
					}}
				>
					Increase Let
				</button>
				<span>{"x: " + x}</span>
			</div>
			<div>
				<button
					className="p-2 m-4 bg-blue-300 rounded-md"
					onClick={() => {
						setVal(val + 1);
					}}
				>
					Increase state
				</button>
				<span>{"State: " + val}</span>
			</div>
			<div>
				<button
					className="p-2 m-4 bg-blue-300 rounded-md"
					onClick={() => {
						z.current = z.current + 1;
						console.log(z.current);
					}}
				>
					Increase Ref
				</button>
				<span>{"Ref: " + z.current}</span>
			</div>
		</div>
	);
};

export default Demo2;
