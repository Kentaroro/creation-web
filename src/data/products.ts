export interface Product {
	id: string;
	image: string;
	title: string;
	url: string;
	tags: { type: string; value: string }[];
	screen: {
		pc: string;
		mobile: string;
	};
}

export const products: Product[] = [
	{
		id: "1",
		image: "images/card_img01.png",
		title: "北陸電力送配電 防護管取付サービス",
		url: "https://creation-dev.tokyo/nw_kouji/bougokan.html",
		tags: [
			{ type: "color", value: "ホワイト" },
			{ type: "category", value: "コーポレート" },
			{ type: "category", value: "インフラ" },
			{ type: "technology", value: "Wordpress" },
		],
		screen: {
			pc: "images/rikuden_pc.png",
			mobile: "images/rikuden_mb.png",
		},
	},
	{
		id: "2",
		image: "images/card_img01.png",
		title: "北陸電力送配電 防護管取付サービス",
		url: "https://creation-dev.tokyo/nw_kouji/bougokan.html",
		tags: [
			{ type: "color", value: "ホワイト" },
			{ type: "category", value: "コーポレート" },
			{ type: "category", value: "インフラ" },
			{ type: "technology", value: "Wordpress" },
		],
		screen: {
			pc: "images/rikuden_pc.png",
			mobile: "images/rikuden_mb.png",
		},
	},
];
