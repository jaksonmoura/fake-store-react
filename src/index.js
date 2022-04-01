import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "material-icons/iconfont/material-icons.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store";
import { Provider } from "react-redux";
import { hydrate } from "./cartSlice";

store.subscribe(() => {
	localStorage.setItem("fake-store-cart", JSON.stringify(store.getState()));
});

const getItemsFromLocalStorage = () => {
	try {
		const persistedState = localStorage.getItem("fake-store-cart");
		if (persistedState) return JSON.parse(persistedState);
	} catch (e) {
		console.log(e);
	}
};

const items = getItemsFromLocalStorage();
if (items) {
	store.dispatch(hydrate(items.cart));
}

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
