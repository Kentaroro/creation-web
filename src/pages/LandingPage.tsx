import ProductCard from "../components/ProductCard";
import { useFilter } from "../contexts/FilterContext";

function LandingPage() {
	const { filter, products } = useFilter();

	const typeFilteredProducts = products.filter(
		(product) => product.type === "landingpage",
	);

	const filteredProducts = filter
		? typeFilteredProducts.filter((product) =>
				product.tags.some(
					(tag) => tag.type === filter.type && tag.value === filter.value,
				),
			)
		: typeFilteredProducts;

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

export default LandingPage;
