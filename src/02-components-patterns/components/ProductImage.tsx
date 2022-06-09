import { useContext } from "react";

import { ProductContext } from "./ProductCard";

import styles from "../styles/styles.module.css";
import noImage from "../assets/no-image.jpg";

export interface ProductImageProps {
	img?: string;
	title?: string;
	className?: string;
	style?: React.CSSProperties;
}

export const ProductImage = ({ img, title, className, style }: ProductImageProps) => {
	const { product } = useContext(ProductContext);
	const imgToShow = img ? img : product.img ?? noImage;

	return (
		<img
			className={`${styles.productImg} ${className}`}
			src={imgToShow}
			alt={title ? title : "Imagen sin alt"}
			style={style}
		/>
	);
};
