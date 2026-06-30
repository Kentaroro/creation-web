export interface Category {
	id: number;
	name: string;
	slug: string;
	parent: number;
}

export interface Product {
	id: string;
	type: string;
	image: string;
	title: string;
	url: string;
	tags: {
		id: number;
		label: string;
		type: string;
		value: string;
		parent: number;
	}[];
	screen: {
		pc: string;
		mobile: string;
	};
}

export interface FilterOption {
	id: number;
	name: string;
	children: FilterOption[];
}

export function buildCategoryMap(
	categories: Category[],
): Map<number, Category> {
	return new Map(categories.map((category) => [category.id, category]));
}

export function getRootCategory(
	category: Category,
	categoryMap: Map<number, Category>,
): Category {
	if (category.parent === 0) return category;
	const parent = categoryMap.get(category.parent);
	if (!parent) return category;
	return getRootCategory(parent, categoryMap);
}

function toCategory(
	tag: Product["tags"][number],
	categoryMap: Map<number, Category>,
): Category {
	return (
		categoryMap.get(tag.id) ?? {
			id: tag.id,
			name: tag.value,
			slug: tag.type,
			parent: tag.parent,
		}
	);
}

function isCategoryInHierarchy(
	category: Category,
	selectedCategoryId: number,
	categoryMap: Map<number, Category>,
): boolean {
	let current: Category | undefined = category;

	while (current) {
		if (current.id === selectedCategoryId) {
			return true;
		}

		if (current.parent === 0) {
			return false;
		}

		current = categoryMap.get(current.parent);
	}

	return false;
}

export function getProductsForPage(pathname: string, products: Product[]) {
	if (pathname === "/landingpage") {
		return products.filter((product) => product.type === "landingpage");
	}
	if (pathname === "/website") {
		return products.filter((product) => product.type === "website");
	}
	return products.filter(
		(product) => product.type === "landingpage" || product.type === "website",
	);
}

export function getFilterOptions(
	products: Product[],
	categoryMap: Map<number, Category>,
): FilterOption[] {
	const categoryLookup = new Map<number, Category>();
	const relevantCategoryIds = new Set<number>();

	const registerCategory = (category: Category) => {
		let current: Category | undefined = category;

		while (current) {
			relevantCategoryIds.add(current.id);
			categoryLookup.set(current.id, current);

			if (current.parent === 0) {
				break;
			}

			current = categoryMap.get(current.parent);
		}
	};

	products.forEach((product) => {
		product.tags.forEach((tag) => {
			registerCategory(toCategory(tag, categoryMap));
		});
	});

	const relevantCategories = Array.from(relevantCategoryIds)
		.map((id) => categoryLookup.get(id) ?? categoryMap.get(id))
		.filter((category): category is Category => Boolean(category))
		.sort((a, b) => a.name.localeCompare(b.name, "ja"));

	const buildTree = (parentId: number | null): FilterOption[] => {
		const children = relevantCategories.filter((category) => {
			if (parentId === null) {
				return (
					category.parent === 0 || !relevantCategoryIds.has(category.parent)
				);
			}
			return category.parent === parentId;
		});

		return children
			.sort((a, b) => a.name.localeCompare(b.name, "ja"))
			.map((category) => ({
				id: category.id,
				name: category.name,
				children: buildTree(category.id),
			}));
	};

	return buildTree(null);
}

export function matchesCategoryFilter(
	product: Product,
	selectedCategoryId: number,
	categoryMap: Map<number, Category>,
): boolean {
	return product.tags.some((tag) => {
		const category = toCategory(tag, categoryMap);
		return isCategoryInHierarchy(category, selectedCategoryId, categoryMap);
	});
}

export function filterProductsByCategory(
	products: Product[],
	parentCategoryId: number | null,
	categoryMap: Map<number, Category>,
): Product[] {
	if (parentCategoryId === null) return products;
	return products.filter((product) =>
		matchesCategoryFilter(product, parentCategoryId, categoryMap),
	);
}
