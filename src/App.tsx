import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import WebSite from "./pages/WebSite";
import Plan from "./pages/Plan";
import Contact from "./pages/Contact";
import { FilterProvider, useFilter } from "./contexts/FilterContext";
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
	const { setProducts, setCategories } = useFilter();
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		async function loadProducts() {
			try {
				const { products, categories } = await fetchProducts();
				setProducts(products);
				setCategories(categories);
			} catch (error) {
				console.error("Failed to fetch products:", error);
			} finally {
				setIsLoading(false);
			}
		}
		loadProducts();
	}, [setProducts, setCategories]);

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
