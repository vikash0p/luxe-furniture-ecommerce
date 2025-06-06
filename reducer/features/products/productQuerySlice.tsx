import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductQueryParams } from '../../types';

interface ProductQueryState {
	params: ProductQueryParams; // Temporary filter selections
	appliedFilters: ProductQueryParams; // Filters that are applied
	loading: boolean;
	searchValue: string;
	selectedCategory: string | null; // Added category selection

	filterType: string; // Default filter type
	filterValue: string; // Default filter value
	page: number;
	limit: number;
}

const initialState: ProductQueryState = {
	params: {},
	appliedFilters: {},
	loading: false,
	searchValue: '',
	selectedCategory: '',

	filterType: '',
	filterValue: '',
	page: 1,
	limit: 12,
};

// Utility function to toggle a value in an array
const toggleValueInArray = <T,>(array: T[], value: T): T[] =>
	array.includes(value)
		? array.filter((item) => item !== value)
		: [...array, value];

const productQuerySlice = createSlice({
	name: 'productQuery',
	initialState,
	reducers: {
		setFilter: (state, action) => {
			state.filterType = action.payload.filterType;
			state.filterValue = action.payload.filterValue;
			// state.page = 1; // Reset page to 1 when filter changes
		},
		setPage: (state, action) => {
			state.page = action.payload.page;
		},

		searchQuery: (state, action: PayloadAction<string>) => {
			state.searchValue = action.payload;
		},

		setParams: (state, action: PayloadAction<ProductQueryParams>) => {
			state.params = { ...state.params, ...action.payload };
		},

		// Toggles a filter value. Handles both single-value and multi-value cases.
		toggleFilter: (
			state,
			action: PayloadAction<{
				filterType: keyof ProductQueryParams;
				value: string;
				isSingleValue?: boolean;
			}>
		) => {
			const { filterType, value, isSingleValue } = action.payload;

			if (isSingleValue) {
				// Single-value case: If the value matches the current one, reset it; otherwise, set it.
				state.params[filterType] =
					// eslint-disable-next-line @typescript-eslint/no-explicit-any
					state.params[filterType] === value ? undefined : (value as any);
			} else {
				// Multi-value (array) case: Toggle the value in the array
				state.params[filterType] = toggleValueInArray(
					(state.params[filterType] as string[]) || [],
					value
				// eslint-disable-next-line @typescript-eslint/no-explicit-any
				) as any;
			}
		},

		resetParams: (state) => {
			state.params = {};
			state.selectedCategory = null; // Reset category when parameters are reset
		},

		setCategory: (state, action: PayloadAction<string>) => {
			state.selectedCategory = action.payload;
		},

		setLoading: (state, action: PayloadAction<boolean>) => {
			state.loading = action.payload;
		},

		applyFilters: (state) => {
			state.appliedFilters = { ...state.params };
			state.params = {}; // Clear params after applying
		},
	},
});

export const {
	setParams,
	resetParams,
	toggleFilter,
	applyFilters,
	setLoading,
	searchQuery,
	setCategory,
	setFilter,
	setPage,
} = productQuerySlice.actions;

export default productQuerySlice.reducer;
