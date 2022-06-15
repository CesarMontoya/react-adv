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
	onChange?: (args: onChangeArgs) => void;
	value?: number;
}

export interface ProductCardHOCProps {
	({ children, product }: ProductCardProps): JSX.Element;
	Title: (Props: ProductTitleProps) => JSX.Element;
	Image: (Props: ProductImageProps) => JSX.Element;
	Buttons: (Props: ProductButtonProps) => JSX.Element;
}

export interface onChangeArgs {
	product: Product;
	count: number;
}

export interface ProductInCart extends Product {
	count: number;
}