import React from 'react';
import Typography from '@mui/material/Typography';
import Product from '../../model/product.model';
import { StyledProductCard } from '../../styles/productCard/productCard';
import { StyledButton } from '../../styles/shared/button';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/cart/cart.action';
import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import Skeleton from '@mui/material/Skeleton';

interface ProductCardProps {
	product: Product;
	isLoading?: boolean;
}

const ProductCard = ({ product, isLoading }: ProductCardProps) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const cartItems = useSelector(selectCartItems);
	const addProductToCart = () => dispatch(addToCart(cartItems, product));
	return (
		<StyledProductCard>
			{isLoading ? (
				<Skeleton
					width={'100%'}
					sx={{
						height: { xs: 300, sm: 410, md: 490 },
						margin: {
							xs: '-3.5rem 0 -.5rem 0',
							sm: '-5rem 0 0rem 0',
							md: '-7rem 0 -1rem 0',
						},
					}}
					animation='wave'
				/>
			) : (
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
					</StyledButton>{' '}
				</div>
			)}
			{isLoading ? (
				<Skeleton
					height={70}
					width={'100%'}
					sx={{ margin: { xs: '-3rem 0 0 0', sm: '-4.5rem 0 0 0' } }}
					animation='wave'
				/>
			) : (
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
			)}
		</StyledProductCard>
	);
};

export default ProductCard;
