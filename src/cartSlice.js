import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		hydrate: (state, action) => {
			return action.payload;
		},
		addToCart: (state, action) => {
			let itemToUpdate = state.filter(
				(item) => item.id === action.payload.id,
			);
			if (itemToUpdate.length !== 0) {
				const itemsUpdated = state.map((item) => {
					if (item.id !== action.payload.id) {
						return item;
					}
					return {
						...item,
						qty: item.qty + 1,
					};
				});
				return itemsUpdated;
			} else {
				state.push({
					id: action.payload.id,
					item: action.payload,
					qty: 1,
				});
			}
		},
		increaseQty: (state, action) => {
			const itemsUpdated = state.map((item) => {
				if (item.id !== action.payload) {
					return item;
				}
				return {
					...item,
					qty: item.qty + 1,
				};
			});
			return itemsUpdated;
		},
		decreaseQty: (state, action) => {
			const itemsUpdated = state.map((item) => {
				if (item.id !== action.payload) {
					return item;
				}
				return {
					...item,
					qty: item.qty - 1,
				};
			});
			return itemsUpdated;
		},
		removeFromCart: (state, action) => {
			return state.filter((item) => item.id !== action.payload);
		},
	},
});

export const { addToCart, hydrate, increaseQty, decreaseQty, removeFromCart } =
	CartSlice.actions;
export default CartSlice.reducer;
