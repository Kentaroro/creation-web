import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import WebSite from "./pages/WebSite";
import Plan from "./pages/Plan";
import Contact from "./pages/Contact";

const router = createBrowserRouter(
	[
		{
			path: "/",
			element: <Layout />,
			children: [
				{ index: true, element: <Home /> },
				{ path: "landingpage", element: <LandingPage /> },
				{ path: "website", element: <WebSite /> },
				{ path: "plan", element: <Plan /> },
				{ path: "contact", element: <Contact /> },
				{ path: "*", element: <div></div> },
			],
		},
	],
	{ basename: "/creation-web" },
);

function App() {
	return <RouterProvider router={router} />;
}

export default App;
