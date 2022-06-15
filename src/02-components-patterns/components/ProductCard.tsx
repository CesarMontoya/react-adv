import { createContext, ReactElement } from "react";

import { onChangeArgs, Product, ProductContextProps } from "../interfaces/productInterfaces";

import styles from "../styles/styles.module.css";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
	product: Product;
	children?: ReactElement | ReactElement[];
	className?: string;
	style?: React.CSSProperties;
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export const ProductCard = ({ children, product, className, style, onChange, value }: Props) => {
	return (
		<Provider value={{ product, onChange, value }}>
			<div className={`${styles.productCard} ${className}`} style={style}>
				{children}
			</div>
		</Provider>
	);
};
