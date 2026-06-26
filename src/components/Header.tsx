import { headerNavigationItems } from "../data/navigation";
import TagOutlineIcon from "@iconify-react/mdi/tag-outline";
import KeyboardArrowDownIcon from "@iconify-react/mdi/keyboard-arrow-down";
import KeyboardArrowRightIcon from "@iconify-react/mdi/keyboard-arrow-right";

export default function Header() {
  return (
    <header className="sticky top-0 left-0 right-0 w-full bg-white shadow-sm rounded-sm">
      <div className="container mx-auto px-5 py-4">
        <nav className="flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {headerNavigationItems.map((item) => (
              <li key={item.label} className="relative group">
                <a
                  href={item.href}
                  className="text-black hover:text-primary transition-colors flex items-center gap-1"
                >
                  <TagOutlineIcon className="size-4" />
                  <span className="font-noto leading-6">{item.label}</span>
                  {item.submenu && <KeyboardArrowDownIcon className="size-6" />}
                </a>
                {item.submenu && (
                  <ul className="absolute top-full left-0 mt-6 bg-white shadow-lg rounded-sm p-2 min-w-2xs w-max z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.label}>
                        <a
                          href={subItem.href}
                          className="px-4 py-2 text-black hover:bg-light hover:text-primary transition-colors flex items-center gap-1"
                        >
                          <KeyboardArrowRightIcon className="size-6" />
                          {subItem.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
