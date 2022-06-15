import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "../components/";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShopingCart";

import "../styles/custom-styles.css";

export const ShoppingPage = () => {
	const { shoppingCart, onProductCountChange } = useShoppingCart();

	return (
		<div>
			<h1>Shopping Store</h1>
			<hr />
			<div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
				{products.map((product) => (
					<ProductCard
						key={product.id}
						product={product}
						className="bg-dark"
						value={shoppingCart[product.id]?.count || 0}
						onChange={onProductCountChange}
					>
						<ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgb(0,0,0,0.2" }} />
						<ProductTitle className="text-white" />
						<ProductButtons className="custom-buttons" />
					</ProductCard>
				))}
			</div>
			<div className="shopping-cart">
				{Object.entries(shoppingCart).map(([key, product]) => (
					<ProductCard
						key={key}
						product={product}
						className="bg-dark"
						style={{ width: "100px" }}
						value={product.count}
						onChange={onProductCountChange}
					>
						<ProductImage className="custom-image" style={{ boxShadow: "10px 10px 10px rgb(0,0,0,0.2" }} />
						<ProductButtons className="custom-buttons" style={{ display: "flex", justifyContent: "center" }} />
					</ProductCard>
				))}
			</div>
		</div>
	);
};
