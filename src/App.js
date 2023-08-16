import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";
import Head from "./components/Head";
import WatchPage from "./components/WatchPage";
import AppLayout from "./components/AppLayout";

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "watch",
				element: <WatchPage />,
			},
		],
	},

	{
		path: "demo",
		element: (
			<>
				<Demo />
				<Demo2 />
			</>
		),
	},
]);

function App() {
	return (
		<div className="py-1 px-3 w-full">
			<Head />
			<RouterProvider router={appRouter} />
		</div>
	);
}

export default App;
