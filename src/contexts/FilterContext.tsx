import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";
import type { Product } from "../data/products";

interface Filter {
	type: string;
	value: string;
}

interface FilterContextType {
	filter: Filter | null;
	setFilter: (filter: Filter | null) => void;
	products: Product[];
	setProducts: (products: Product[]) => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
	const [filter, setFilter] = useState<Filter | null>(null);
	const [products, setProducts] = useState<Product[]>([]);

	return (
		<FilterContext.Provider
			value={{ filter, setFilter, products, setProducts }}
		>
			{children}
		</FilterContext.Provider>
	);
}

export function useFilter() {
	const context = useContext(FilterContext);
	if (context === undefined) {
		throw new Error("useFilter must be used within a FilterProvider");
	}
	return context;
}
