import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
import { useFilter } from "../contexts/FilterContext";

function Layout() {
	const location = useLocation();
	const { setFilter } = useFilter();
	const showHeader = !["/plan", "/contact"].includes(location.pathname);

	useEffect(() => {
		setFilter(null);
	}, [location.pathname, setFilter]);

	return (
		<div className="min-h-screen">
			<Sidebar />
			<div className="ml-(--container-sidebar) flex flex-col p-10 gap-10">
				{showHeader && <Header />}
				<main className="pb-10">
					<Outlet />
				</main>
			</div>
		</div>
	);
}

export default Layout;
