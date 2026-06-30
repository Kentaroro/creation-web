import { createContext, useContext, useMemo, useState } from "react";
import type { ReactNode } from "react";
import type { Category, Product } from "../data/products";
import { buildCategoryMap } from "../data/products";

interface Filter {
	type: "category";
	value: number;
}

interface FilterContextType {
	filter: Filter | null;
	setFilter: (filter: Filter | null) => void;
	products: Product[];
	setProducts: (products: Product[]) => void;
	categories: Category[];
	setCategories: (categories: Category[]) => void;
	categoryMap: Map<number, Category>;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
	const [filter, setFilter] = useState<Filter | null>(null);
	const [products, setProducts] = useState<Product[]>([]);
	const [categories, setCategories] = useState<Category[]>([]);
	const categoryMap = useMemo(() => buildCategoryMap(categories), [categories]);

	return (
		<FilterContext.Provider
			value={{
				filter,
				setFilter,
				products,
				setProducts,
				categories,
				setCategories,
				categoryMap,
			}}
		>
			{children}
		</FilterContext.Provider>
	);
}

// eslint-disable-next-line react-refresh/only-export-components
export function useFilter() {
	const context = useContext(FilterContext);
	if (context === undefined) {
		throw new Error("useFilter must be used within a FilterProvider");
	}
	return context;
}
