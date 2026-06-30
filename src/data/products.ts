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
	const allTags = new Set<string>();

	products.forEach((product) => {
		product.tags.forEach((tag) => {
			allTags.add(tag.value);
		});
	});

	return Array.from(allTags);
}
