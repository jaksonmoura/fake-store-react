import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			if (state.length !== 0) {
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
					qty: state.qty + 1 || 1,
				});
			}
		},
		removeFromCart: (state, action) => {
			state.filter((item) => item.id !== action.payload);
		},
	},
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
