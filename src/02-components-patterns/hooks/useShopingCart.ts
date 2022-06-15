import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/productInterfaces";

export const useShoppingCart = () => {
	const [shoppingCart, setShoppingCart] = useState<{ [key: string]: ProductInCart }>({});

	const onProductCountChange = ({ count, product }: { count: number; product: Product }) => {
		setShoppingCart((oldShoppingCart) => {
			const productInCart: ProductInCart = oldShoppingCart[product.id] || { ...product, count: 0 };

			// Si el contador es mayor a cero, el producto existe en el cart.
			if (Math.max(productInCart.count + count, 0) > 0) {
				productInCart.count += count;

				return {
					...oldShoppingCart,
					[product.id]: productInCart,
				};
			}

			// Cuando el contador es cero o menor, significa que no exite el producto en el cart,
			// por lo tanto, se debe borrar del objeto de productos
			const { [product.id]: toDelete, ...rest } = oldShoppingCart;
			return rest;
		});
	};

	return { shoppingCart, onProductCountChange };
};
