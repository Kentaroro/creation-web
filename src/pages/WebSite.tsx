import ProductCard from "../components/ProductCard";
import { useFilter } from "../contexts/FilterContext";

function WebSite() {
	const { filter, products } = useFilter();

	const typeFilteredProducts = products.filter(
		(product) => product.type === "website",
	);

	const filteredProducts = filter
		? typeFilteredProducts.filter((product) =>
				product.tags.some((tag) => tag.value === filter.value),
			)
		: typeFilteredProducts;

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
