import {
	getFilterOptions,
	getProductsForPage,
	type FilterOption,
} from "../data/products";
import TagOutlineIcon from "@iconify-react/mdi/tag-outline";
import FolderOutlineIcon from "@iconify-react/mdi/folder-outline";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useFilter } from "../contexts/FilterContext";

function hasActiveDescendant(
	option: FilterOption,
	selectedCategoryId: number | null,
): boolean {
	if (selectedCategoryId === null) return false;
	if (option.id === selectedCategoryId) return true;
	return option.children.some((child) =>
		hasActiveDescendant(child, selectedCategoryId),
	);
}

function renderFilterOptions(
	options: FilterOption[],
	selectedCategoryId: number | null,
	setFilter: (filter: { type: "category"; value: number } | null) => void,
	expandedCategoryId: number | null,
	setExpandedCategoryId: (categoryId: number | null) => void,
	level = 0,
) {
	return options.map((option) => {
		const isExpanded =
			expandedCategoryId === option.id ||
			hasActiveDescendant(option, expandedCategoryId);

		return (
			<li key={option.id}>
				<div
					className="relative"
					onMouseEnter={() => setExpandedCategoryId(option.id)}
				>
					<button
						type="button"
						className={`text-black hover:text-primary transition-colors flex items-center gap-1 whitespace-nowrap ${
							selectedCategoryId === option.id
								? "text-primary font-semibold"
								: ""
						}`}
						onClick={() => setFilter({ type: "category", value: option.id })}
					>
						{option.children.length > 0 ? (
							<FolderOutlineIcon className="size-4 mt-0.5" />
						) : (
							<TagOutlineIcon className="size-4 mt-0.5" />
						)}
						<span className="font-noto leading-6">{option.name}</span>
					</button>
					{option.children.length > 0 && isExpanded && (
						<ul className="flex flex-col gap-4 bg-white shadow-md rounded-sm p-6 absolute top-full left-0 z-10">
							{renderFilterOptions(
								option.children,
								selectedCategoryId,
								setFilter,
								expandedCategoryId,
								setExpandedCategoryId,
								level + 1,
							)}
						</ul>
					)}
				</div>
			</li>
		);
	});
}

export default function Header() {
	const location = useLocation();
	const { filter, setFilter, products, categoryMap } = useFilter();
	const [expandedCategoryId, setExpandedCategoryId] = useState<number | null>(
		null,
	);
	const pageProducts = getProductsForPage(location.pathname, products);
	const filterOptions = getFilterOptions(pageProducts, categoryMap);

	return (
		<header className="sticky top-10 left-0 right-0 w-full bg-white shadow-sm rounded-sm">
			<div className="container mx-auto px-5 py-4">
				<nav onMouseLeave={() => setExpandedCategoryId(null)}>
					<ul className="flex flex-wrap items-center gap-6">
						<li>
							<button
								onClick={() => setFilter(null)}
								className={`transition-colors flex items-center gap-1 whitespace-nowrap ${
									filter === null
										? "text-primary font-semibold"
										: "text-black hover:text-primary"
								}`}
							>
								<FolderOutlineIcon className="size-4 mt-0.5" />
								全て
							</button>
						</li>
						{renderFilterOptions(
							filterOptions,
							filter?.value ?? null,
							setFilter,
							expandedCategoryId,
							setExpandedCategoryId,
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
}
