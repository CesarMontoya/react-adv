import { useProduct } from "../hooks/useProduct";

import styles from "../styles/styles.module.css";

export interface ProductButtonProps {
	className?: string;
	style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: ProductButtonProps) => {
	const { counter, increaseBy } = useProduct();
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
