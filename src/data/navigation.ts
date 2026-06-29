export interface NavigationItem {
	label: string;
	href: string;
}

export interface HeaderNavigationItem {
	label: string;
	href: string;
	submenu?: SubMenuItem[];
}

export interface SubMenuItem {
	label: string;
	href: string;
}

export const navigationItems: NavigationItem[] = [
	{ label: "Home", href: "/" },
	{ label: "LandingPage", href: "/landingpage" },
	{ label: "WebSite", href: "/website" },
	{ label: "Plan", href: "/plan" },
	{ label: "Contact", href: "/contact" },
];
