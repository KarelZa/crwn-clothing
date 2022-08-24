import React, { useContext } from 'react';
import Typography from '@mui/material/Typography';
import Product from '../../model/product.model';
import { StyledProductCard } from '../../styles/productCard/productCard';
import { StyledButton } from '../../styles/shared/button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart/cart.action';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';

interface ProductCardProps {
	product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const addProductToCart = () => dispatch(addToCart(cartItems, product));

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
