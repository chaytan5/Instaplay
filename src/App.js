import { Provider } from "react-redux";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Body from "./components/Body";
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
