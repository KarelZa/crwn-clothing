import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { setCategories } from '../../store/categories/category.action';
import { getCategoriesAndDocuments } from '../../utils/firebase/firebaseInJS';
import CategoriesPreview from '../categories-preview/CategoriesPreview';
import Category from '../category/Category';

type ShopProps = {};

const Shop = (props: ShopProps) => {
	const dispatch = useDispatch();
	useEffect(() => {
		const getCategoriesMap = async () => {
			const categories = await getCategoriesAndDocuments();
			console.log(categories);

			dispatch(setCategories(categories));
		};
		getCategoriesMap();
	}, [dispatch]);

	return (
		<Routes>
			<Route index element={<CategoriesPreview />} />
			<Route path=':category' element={<Category />} />
		</Routes>
	);
};

export default Shop;
