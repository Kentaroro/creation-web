import { useState } from "react";
import { headerNavigationItems } from "../data/navigation";

export default function Header() {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  return (
    <header className="sticky top-0 left-0 right-0 w-full bg-white shadow-sm">
      <div className="container mx-auto px-5 py-4">
        <nav className="flex items-center gap-8">
          <ul className="flex items-center gap-6">
            {headerNavigationItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setHoveredItem(item.label)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <a
                  href={item.href}
                  className="text-black hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
                {item.submenu && hoveredItem === item.label && (
                  <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-lg py-2 min-w-[150px] z-50">
                    {item.submenu.map((subItem) => (
                      <li key={subItem.label}>
                        <a
                          href={subItem.href}
                          className="block px-4 py-2 text-black hover:bg-light hover:text-primary transition-colors"
                        >
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
