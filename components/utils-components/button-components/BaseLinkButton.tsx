'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'next-view-transitions';

interface BaseLinkButtonProps {
	href: string;
	buttonLinkChildren?: React.ReactNode;
	className?: string;
	variant?:
		| 'default'
		| 'secondary'
		| 'destructive'
		| 'outline'
		| 'ghost'
		| 'link';
	ariaLabel?: string; // Optional aria-label prop for accessibility
	size?: 'default' | 'sm' | 'lg'; // Optional size prop for button size
}

const BaseLinkButton: React.FC<BaseLinkButtonProps> = ({
	href,
	buttonLinkChildren = 'View Product',
	className = '',
	variant = 'default',
	ariaLabel, // Destructure the aria-label prop
	size = 'default', // Default size is 'default'
}) => {
	return (
		<div className=''>
			<Button
				size={size} // Use the size prop to set the button size
				asChild
				className={` ${className}`}
				variant={variant}
				aria-label={ariaLabel} // Set the aria-label on the button
			>
				<Link href={href}>{buttonLinkChildren}</Link>
			</Button>
		</div>
	);
};

export default BaseLinkButton;
