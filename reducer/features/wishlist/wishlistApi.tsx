import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { WishlistResponse } from '../../../src/types/wishlistType';

const wishlistApi = createApi({
	reducerPath: 'wishlistApi',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://backend-house.vercel.app',
	}),
	tagTypes: ['Wishlist'],
	endpoints: (builder) => ({
		// Fetch wishlist
		getWishlist: builder.query<WishlistResponse, string>({
			query: (userId) => `/wishlist/get/${userId}`,
			providesTags: (result, error, userId) => [
				{ type: 'Wishlist', id: userId },
			],
		}),

		// Add item to wishlist
		addItemToWishlist: builder.mutation({
			query: (body) => ({
				url: '/wishlist/add',
				method: 'POST',
				body,
			}),
			invalidatesTags: (result, error, body) => [
				{ type: 'Wishlist', id: body.userId },
			],
		}),

		// Remove item from wishlist
		removeItemFromWishlist: builder.mutation({
			query: ({ wishlistItemId }) => ({
				url: `/wishlist/delete/${wishlistItemId}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, { userId }) => [
				{ type: 'Wishlist', id: userId },
			],
		}),
	}),
});

export const {
	useGetWishlistQuery,
	useAddItemToWishlistMutation,
	useRemoveItemFromWishlistMutation,
} = wishlistApi;

export default wishlistApi;
