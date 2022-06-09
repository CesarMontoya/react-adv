import { Props as ProductCardProps } from "../components/ProductCard";
import { ProductButtonProps } from "../components/ProductButtons";
import { ProductImageProps } from "../components/ProductImage";
import { ProductTitleProps } from "../components/ProductTitle";

export interface Product {
	id: string;
	title: string;
	img?: string;
}

export interface ProductContextProps {
	product: Product;
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element;
	Buttons: (Props: ProductButtonProps) => JSX.Element;
}
