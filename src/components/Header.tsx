import { getFilterOptions } from "../data/products";
import TagOutlineIcon from "@iconify-react/mdi/tag-outline";
import { useFilter } from "../contexts/FilterContext";

export default function Header() {
	const { setFilter, products } = useFilter();
	const filterOptions = getFilterOptions(products);

	return (
		<header className="sticky top-10 left-0 right-0 w-full bg-white shadow-sm rounded-sm">
			<div className="container mx-auto px-5 py-4">
				<nav>
					<ul className="flex items-center gap-6 flex-wrap">
						<li>
							<button
								onClick={() => setFilter(null)}
								className="text-black hover:text-primary transition-colors flex items-center gap-1"
							>
								<TagOutlineIcon className="size-4 mt-0.5" />
								全て
							</button>
						</li>
						{filterOptions.map((tag) => (
							<li key={tag}>
								<button
									onClick={() => setFilter({ type: "tag", value: tag })}
									className="text-black hover:text-primary transition-colors flex items-center gap-1"
								>
									<TagOutlineIcon className="size-4" />
									<span className="font-noto leading-6">{tag}</span>
								</button>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
