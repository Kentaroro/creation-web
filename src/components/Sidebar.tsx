import { Link } from "react-router-dom";
import { navigationItems } from "../data/navigation";

function Sidebar() {
	return (
		<aside className="w-[200px] p-5 border-r border-gray-300">
			<nav>
				<ul className="list-none p-0">
					{navigationItems.map((item) => (
						<li key={item.href} className="mb-[10px]">
							<Link to={item.href}>{item.label}</Link>
						</li>
					))}
				</ul>
			</nav>
		</aside>
	);
}

export default Sidebar;
