import { NavLink } from "react-router-dom";
import { navigationItems } from "../data/navigation";
import KeyboardArrowRightIcon from "@iconify-react/mdi/keyboard-arrow-right";

function Sidebar() {
	return (
		<aside className="w-sidebar p-10 flex flex-col items-center gap-20 bg-primary fixed top-0 left-0 h-screen">
			<div className="size-60 flex items-center justify-center bg-white">
				<h1 className="text-center text-primary text-4xl font-medium font-roboto">
					CREATION
					<br />
					WEB
				</h1>
			</div>
			<nav className="self-stretch">
				<ul className="list-none font-roboto font-medium text-white text-xl">
					{navigationItems.map((item) => (
						<li key={item.href}>
							<NavLink
								to={item.href}
								className={({ isActive }) =>
									`border-b border-white py-2 px-2 flex justify-between items-center hover:opacity-80 transition-opacity ${
										isActive ? "bg-white text-primary" : ""
									}`
								}
							>
								<span>{item.label}</span>
								<KeyboardArrowRightIcon className="size-6" />
							</NavLink>
						</li>
					))}
				</ul>
			</nav>
			<p className="text-white text-sm mt-auto">
				© {new Date().getFullYear()} CREATION WEB
			</p>
		</aside>
	);
}

export default Sidebar;
