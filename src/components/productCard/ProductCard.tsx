import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import { ShoppingCartContext } from '../../contexts/cart.context';
import Product from '../../model/product.model';
import { StyledProductCard } from '../../styles/productCard/productCard';
import { StyledButton } from '../../styles/shared/button';

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	const { name, price, imageUrl } = product;
	const { addToCart } = useContext(ShoppingCartContext);

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
