import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import WebSite from "./pages/WebSite";
import Plan from "./pages/Plan";
import Contact from "./pages/Contact";
import { FilterProvider, useFilter } from "./contexts/FilterContext";
import { products as fallbackProducts } from "./data/products";
import { fetchProducts } from "./api/wordpress";

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
				{ path: "*", element: <div>404</div> },
			],
		},
	],
	{ basename: import.meta.env.VITE_BASE_PATH || "/" },
);

function DataLoader() {
	const { setProducts } = useFilter();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function loadProducts() {
			try {
				const wpProducts = await fetchProducts();
				if (wpProducts.length > 0) {
					setProducts(wpProducts);
				} else {
					setProducts(fallbackProducts);
				}
			} catch (error) {
				console.error("Failed to fetch products, using fallback data:", error);
				setProducts(fallbackProducts);
			} finally {
				setIsLoading(false);
			}
		}
		loadProducts();
	}, [setProducts]);

	if (isLoading) {
		return <div className="text-center py-8">読み込み中...</div>;
	}

	return <RouterProvider router={router} />;
}

function App() {
	return (
		<FilterProvider>
			<DataLoader />
		</FilterProvider>
	);
}

export default App;
