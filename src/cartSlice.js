import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
	name: "cart",
	initialState: [],
	reducers: {
		addToCart: (state, action) => {
			state.push(action.payload);
		},
		// removeFromCart: (state, action) => {
		//     state.find
		// }
	},
});

export const { addToCart } = CartSlice.actions;
export default CartSlice.reducer;
