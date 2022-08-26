import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { AnyAction } from 'redux';
import { fetchCategoriesAsync } from '../../store/categories/category.action';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';

type ShopProps = {};

const Shop = (props: ShopProps) => {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchCategoriesAsync() as unknown as AnyAction);
	}, [dispatch]);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
