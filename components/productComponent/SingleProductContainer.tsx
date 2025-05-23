'use client';
import useFurnitureSingeProductHook from '@/src/hooks/useFurnitureSingeProductHook';
import React from 'react';
import SingleProductCard from './SingleProductCard';
import LoadingSingleProduct from '../utils-components/loading-components/LoadingSingleProduct';
import ProductSingleInformation from './ProductSingleInformation';
import ReviewForm from '../utils-components/form-components/ReviewForm';
import LoadingProductSingleInformation from '../utils-components/loading-components/LoadingProductSingleInformation';
import LoadingReviewForm from '../utils-components/loading-components/LoadingReviewForm';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

const SingleProductContainer = ({ id }: { id: string }) => {
	const { data, isError, isFetching } = useFurnitureSingeProductHook(id);
	const router = useRouter();

	// Error State
	if (isError) {
		return (
			<div className='flex justify-center items-center  flex-col gap-5 py-20'>
				<p className='text-red-500 font-semibold text-2xl'>
					Something went wrong!
				</p>
				<Button onClick={() => router.push('/products')}>Products</Button>
			</div>
		);
	}
	return (
		<div>
			{isFetching ? (
				<LoadingSingleProduct />
			) : (
				<SingleProductCard product={data?.product} review={data?.review} />
			)}
			{isFetching ? (
				<LoadingProductSingleInformation />
			) : (
				<ProductSingleInformation product={data?.product} />
			)}
			{isFetching ? (
				<LoadingReviewForm />
			) : (
				<ReviewForm productId={data?.product?._id} review={data?.review} />
			)}
		</div>
	);
};

export default SingleProductContainer;
