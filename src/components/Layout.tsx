import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import Header from "./Header";

function Layout() {
	return (
		<div className="min-h-screen">
			<Sidebar />
			<div className="ml-(--container-sidebar) flex flex-col p-10 gap-10">
				<Header />
				<main className="pb-10">
					<Outlet />
				</main>
			</div>
		</div>
	);
}

export default Layout;
