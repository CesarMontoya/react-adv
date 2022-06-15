import { useContext } from "react";

import { useProduct } from "../hooks/useProduct";
import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";

export interface ProductButtonProps {
	className?: string;
	style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonProps) => {
	const { onChange, product, value } = useContext(ProductContext);
	const { counter, increaseBy } = useProduct({ product, onChange, value });

	return (
		<div className={`${styles.buttonsContainer} ${className}`} style={style}>
			<button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
				-
			</button>

			<div className={styles.countLabel}>{counter}</div>

			<button className={styles.buttonAdd} onClick={() => increaseBy(1)}>
				+
			</button>
		</div>
	);
};
