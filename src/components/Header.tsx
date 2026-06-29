import { getFilterOptions } from "../data/products";
import TagOutlineIcon from "@iconify-react/mdi/tag-outline";
import KeyboardArrowDownIcon from "@iconify-react/mdi/keyboard-arrow-down";
import KeyboardArrowRightIcon from "@iconify-react/mdi/keyboard-arrow-right";
import { useFilter } from "../contexts/FilterContext";

export default function Header() {
	const { setFilter, products } = useFilter();
	const filterOptions = getFilterOptions(products);
	return (
		<header className="sticky top-10 left-0 right-0 w-full bg-white shadow-sm rounded-sm">
			<div className="container mx-auto px-5 py-4">
				<nav className="flex items-center gap-8">
					<ul className="flex items-center gap-6">
						<li>
							<button
								onClick={() => setFilter(null)}
								className="text-black hover:text-primary transition-colors flex items-center gap-1"
							>
								<TagOutlineIcon className="size-4 mt-0.5" />
								全て
							</button>
						</li>
						{filterOptions.map((option) => (
							<li key={option.type} className="relative group">
								<button className="text-black hover:text-primary transition-colors flex items-center gap-1">
									<TagOutlineIcon className="size-4" />
									<span className="font-noto leading-6">{option.label}</span>
									<KeyboardArrowDownIcon className="size-6 mt-0.5" />
								</button>
								<ul className="absolute top-full left-0 mt-6 bg-white shadow-lg rounded-sm p-2 min-w-2xs w-max z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
									{option.values.map((value) => (
										<li key={value}>
											<button
												onClick={() =>
													setFilter({
														type: option.type,
														value: value,
													})
												}
												className="px-4 py-2 text-black hover:bg-light hover:text-primary transition-colors flex items-center gap-1 w-full text-left"
											>
												<KeyboardArrowRightIcon className="size-6" />
												{value}
											</button>
										</li>
									))}
								</ul>
							</li>
						))}
					</ul>
				</nav>
			</div>
		</header>
	);
}
