import { Link } from "react-router-dom";
import { navigationItems } from "../data/navigation";
import KeyboardArrowRightIcon from "@iconify-react/mdi/keyboard-arrow-right";

function Sidebar() {
  return (
    <aside className="w-xs p-10 flex flex-col items-center gap-20 bg-primary">
      <div className="size-60 flex items-center justify-center bg-white">
        <h1 className="text-center text-primary text-4xl font-medium font-roboto">
          CREATION
          <br />
          WEB
        </h1>
      </div>
      <nav className="self-stretch">
        <ul className="list-none space-y-4 font-roboto font-medium text-white text-xl">
          {navigationItems.map((item) => (
            <li
              key={item.href}
              className="border-b border-white pb-2 flex justify-between items-center hover:opacity-80 transition-opacity"
            >
              <Link to={item.href}>{item.label}</Link>
              <KeyboardArrowRightIcon className="size-6" />
            </li>
          ))}
        </ul>
      </nav>
      <p className="text-white text-sm">
        © {new Date().getFullYear()} CREATION WEB
      </p>
    </aside>
  );
}

export default Sidebar;
