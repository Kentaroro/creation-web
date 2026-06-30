import ProductCard from "../components/ProductCard";
import { useFilter } from "../contexts/FilterContext";
import {
	filterProductsByCategory,
	getProductsForPage,
} from "../data/products";

function WebSite() {
	const { filter, products, categoryMap } = useFilter();

	const typeFilteredProducts = getProductsForPage("/website", products);
	const filteredProducts = filterProductsByCategory(
		typeFilteredProducts,
		filter?.value ?? null,
		categoryMap,
	);

	if (filteredProducts.length === 0) {
		return <>登録されているサイトはありません。</>;
	}
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
			{filteredProducts.map((product) => (
				<ProductCard
					key={product.title}
					id={product.id}
					image={product.image}
					title={product.title}
					url={product.url}
					tags={product.tags.map((tag) => tag.value)}
					screen={product.screen}
				/>
			))}
		</div>
	);
}

export default WebSite;
