import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

function Home() {
	return (
		<div className="p-10">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{products.map((product) => (
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
		</div>
	);
}

export default Home;
