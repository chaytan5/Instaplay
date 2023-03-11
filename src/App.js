import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import Head from "./components/Head";
import Sidebar from "./components/Sidebar";
import WatchPage from "./components/WatchPage";
import store from "./utils/store";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <Body />,
	},
	{
		path: "watch",
		element: <WatchPage />,
	},
	{
		path: "demo",
		element: (
			<>
				{" "}
				<Demo /> <Demo2 />
			</>
		),
	},
]);

function App() {
	return (
		<Provider store={store}>
			<div className="py-1 px-3">
				<Head />
				<div className="flex flex-row">
					<Sidebar />
					<RouterProvider router={appRouter} />
				</div>
			</div>
		</Provider>
	);
}

export default App;
