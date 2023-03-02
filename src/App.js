import Body from "./components/Body";
import Head from "./components/Head";
import Sidebar from "./components/Sidebar";

function App() {
	return (
		<div className="py-1 px-3">
			<Head />
			<div className="flex flex-row">
				<Sidebar />
				<Body />
			</div>
		</div>
	);
}

export default App;
