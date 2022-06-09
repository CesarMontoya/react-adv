import { createContext, ReactElement } from "react";

import { Product, ProductContextProps } from "../interfaces/productInterfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: React.CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
	return (
		<Provider value={{ product }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	);
};
