'use client';
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { furnitureCollectionData } from '@/utils/data/HomeData';
import { FurnitureItem } from '@/utils/types/types';
import Heading from '../reusableComponents/Heading';
import { Check } from 'lucide-react';
import { Link } from 'next-view-transitions';
const categories = ['Wood Chair', 'Plastic Chair', 'Sofa Collection'];

const HomeDiscountItem: React.FC = () => {
	const [selectedCategory, setSelectedCategory] =
		useState<string>('Wood Chair');

	// Filter data based on the selected category
	const filteredData: FurnitureItem[] = furnitureCollectionData.filter(
		(item) => item.category === selectedCategory
	);

	return (
		<section className='max-w-6xl mx-auto px-4 py-12'>
			<Heading title='Luxe Discount' />

			{/* Category Selection */}
			<div className='flex flex-wrap justify-center gap-4 my-8'>
				{categories.map((category) => (
					<Button
						key={category}
						onClick={() => setSelectedCategory(category)}
						variant={selectedCategory === category ? 'default' : 'outline'}
						aria-pressed={selectedCategory === category}
						aria-label={`Show ${category} discounts`}
					>
						{category}
					</Button>
				))}
			</div>

			{/* Discount Grid */}
			<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 items-center'>
				{/* Left Content */}
				<div className='space-y-6'>
					{filteredData.map((item) => (
						<div key={item.id} className='p-6 bg-gray-50 rounded-lg shadow-md'>
							<p className='text-3xl font-bold text-custom-4'>
								{item.discounts}
							</p>
							<h2 className='text-xl font-semibold text-primary mt-2'>
								{item.title}
							</h2>
							<p className='text-gray-600 text-sm mb-4'>{item.description}</p>

							{/* Properties List */}
							<ul className='space-y-2'>
								{item.properties.map((prop, index) => (
									<li key={index} className='flex items-center text-gray-500'>
										<Check className='text-primary w-5 h-5 mr-2' />
										<span>{prop.value}</span>
									</li>
								))}
							</ul>

							<Button asChild className='mt-6' size='lg'>
								<Link href='/products'>Shop Now</Link>
							</Button>
						</div>
					))}
				</div>

				{/* Right Image */}
				{filteredData.length > 0 && (
					<div className='flex justify-center'>
						<Image
							src={
								'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGNoYWlyfGVufDB8fDB8fHww'
							}
							alt={`${filteredData[0].title} - Discount Offer`}
							width={400}
							height={400}
							className='rounded-lg object-cover w-72 h-96 shadow-md'
							priority
						/>
					</div>
				)}
			</div>
		</section>
	);
};

export default HomeDiscountItem;
