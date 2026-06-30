import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
	const location = useLocation();
	const showHeader = !["/plan", "/contact"].includes(location.pathname);

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
