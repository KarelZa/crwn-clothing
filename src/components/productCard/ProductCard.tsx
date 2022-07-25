import Typography from '@mui/material/Typography';
import React, { useContext } from 'react';
import { ShoppingCartContext, useCartContext } from '../../contexts/cart.context';
import { StyledProductCard } from '../../styles/productCard/productCard';
import { StyledButton } from '../../styles/shared/button';

interface ProductCardProps {
	product: {
		id: number;
		name: string;
		price: number;
		imageUrl: string;
	};
}

const ProductCard = ({ product }: ProductCardProps) => {
	const { name, price, imageUrl } = product;
	const { addToCart } = useCartContext();

	const addProductToCart = () => addToCart(product);

	return (
		<StyledProductCard>
			<div className='product-card-image'>
				<img src={imageUrl} alt={name} />
				<StyledButton
					variant='contained'
					size='small'
					bgColor='#F3F3F4'
					bgHover='#14110F'
					sx={{ display: { lg: 'none' } }}
					onClick={addProductToCart}
				>
					<Typography variant='button' fontWeight={600}>
						Add to cart
					</Typography>
				</StyledButton>
			</div>
			<div className='product-card-footer'>
				<span>
					<Typography variant='body1' fontWeight={600}>
						{name}
					</Typography>
				</span>
				<span>
					<Typography variant='body1' fontWeight={600}>
						{price}
					</Typography>
				</span>
			</div>
		</StyledProductCard>
	);
};

export default ProductCard;
