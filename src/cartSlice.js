import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			// TODO: Verify if item exists, if so increase qty
			console.log(action.id);
			const updatedItems = state.map((item) => {
				if (item.id === action.payload.id) {
					return { ...item, qty: action.payload.qty + 1 };
				}
				return item;
			});

			// return [
			// 	...state,
			// 	{ id: action.payload.id, item: { ...action.payload }, qty: 1 },
			// ];
			return updatedItems;
		},
		// removeFromCart: (state, action) => {
		//     state.find
		// }
	},
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
