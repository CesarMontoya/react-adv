import { createContext } from "react";

import { ProductContextProps, ProductCardProps } from "../interfaces/productInterfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
	return (
		<Provider value={{ product }}>
			<div className={styles.productCard}>{children}</div>
		</Provider>
	);
};
