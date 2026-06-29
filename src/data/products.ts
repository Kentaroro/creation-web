export interface Product {
	id: string;
	type: string;
	image: string;
	title: string;
	url: string;
	tags: {
		label: string;
		type: string;
		value: string;
	}[];
	screen: {
		pc: string;
		mobile: string;
	};
}

export function getFilterOptions(products: Product[]) {
	const typeMap = new Map<string, { label: string; values: Set<string> }>();

	products.forEach((product) => {
		product.tags.forEach((tag) => {
			if (!typeMap.has(tag.type)) {
				typeMap.set(tag.type, { label: tag.label, values: new Set() });
			}
			typeMap.get(tag.type)!.values.add(tag.value);
		});
	});

	return Array.from(typeMap.entries()).map(([type, data]) => ({
		type,
		label: data.label,
		values: Array.from(data.values),
	}));
}

export const products: Product[] = [
	{
		id: "1",
		type: "landingpage",
		image: "images/card_img01.png",
		title: "北陸電力送配電 防護管取付サービス",
		url: "https://creation-dev.tokyo/nw_kouji/bougokan.html",
		tags: [
			{ label: "カラー", type: "color", value: "ブラック" },
			{ label: "サイトタイプ", type: "siteType", value: "コーポレート" },
			{ label: "業界", type: "industry", value: "インフラ" },
			{ label: "特徴", type: "feature", value: "Wordpress" },
			{ label: "特徴", type: "feature", value: "レスポンシブ" },
		],
		screen: {
			pc: "images/rikuden_pc.png",
			mobile: "images/rikuden_mb.png",
		},
	},
	{
		id: "2",
		type: "landingpage",
		image: "images/card_img01.png",
		title: "北陸電力送配電 防護管取付サービス",
		url: "https://creation-dev.tokyo/nw_kouji/bougokan.html",
		tags: [
			{ label: "カラー", type: "color", value: "ホワイト" },
			{ label: "サイトタイプ", type: "siteType", value: "コーポレート" },
			{ label: "業界", type: "industry", value: "インフラ" },
			{ label: "特徴", type: "feature", value: "Wordpress" },
		],
		screen: {
			pc: "images/rikuden_pc.png",
			mobile: "images/rikuden_mb.png",
		},
	},
	{
		id: "3",
		type: "landingpage",
		image: "images/card_img01.png",
		title: "北陸電力送配電 防護管取付サービス",
		url: "https://creation-dev.tokyo/nw_kouji/bougokan.html",
		tags: [
			{ label: "カラー", type: "color", value: "ホワイト" },
			{ label: "サイトタイプ", type: "siteType", value: "コーポレート" },
			{ label: "業界", type: "industry", value: "インフラ" },
			{ label: "特徴", type: "feature", value: "Wordpress" },
		],
		screen: {
			pc: "images/rikuden_pc.png",
			mobile: "images/rikuden_mb.png",
		},
	},
	{
		id: "3",
		type: "landingpage",
		image: "images/card_img01.png",
		title: "北陸電力送配電 防護管取付サービス",
		url: "https://creation-dev.tokyo/nw_kouji/bougokan.html",
		tags: [
			{ label: "カラー", type: "color", value: "ホワイト" },
			{ label: "サイトタイプ", type: "siteType", value: "コーポレート" },
			{ label: "業界", type: "industry", value: "インフラ" },
			{ label: "特徴", type: "feature", value: "Wordpress" },
		],
		screen: {
			pc: "images/rikuden_pc.png",
			mobile: "images/rikuden_mb.png",
		},
	},
];
