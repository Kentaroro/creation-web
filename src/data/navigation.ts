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

export const headerNavigationItems: HeaderNavigationItem[] = [
	{
		label: "サイトタイプ",
		href: "/",
		submenu: [
			{ label: "コーポレート", href: "/site-type/corporate" },
			{ label: "ショップ", href: "/site-type/shop" },
			{ label: "リクルート", href: "/site-type/recruit" },
			{ label: "メディア", href: "/site-type/media" },
			{ label: "キャンペーン", href: "/site-type/campaign" },
		],
	},
	{
		label: "業種",
		href: "/industry",
		submenu: [
			{ label: "レジャー", href: "/industry/leisure" },
			{ label: "飲食", href: "/industry/food" },
			{ label: "不動産", href: "/industry/real-estate" },
			{ label: "建設", href: "/industry/construction" },
		],
	},
	{
		label: "カラー",
		href: "/color",
		submenu: [
			{ label: "ホワイト・ライト", href: "/color/white-light" },
			{ label: "ブラック・ダーク", href: "/color/black-dark" },
			{ label: "ブルー", href: "/color/blue" },
			{ label: "グリーン", href: "/color/green" },
			{ label: "イエロー", href: "/color/yellow" },
			{ label: "レッド", href: "/color/red" },
		],
	},
	{
		label: "特徴",
		href: "/feature",
		submenu: [
			{ label: "アニメーション", href: "/feature/animation" },
			{ label: "動画", href: "/feature/video" },
			{ label: "スライダー", href: "/feature/slider" },
			{ label: "ギャラリー", href: "/feature/gallery" },
			{ label: "モーダル", href: "/feature/modal" },
			{ label: "アコーディオン", href: "/feature/accordion" },
			{ label: "メールフォーム", href: "/feature/contact-form" },
		],
	},
];
