import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import Cart from "./pages/Cart/Cart";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="product/:id" element={<Product />}></Route>
					<Route path="products/:category" element={<Category />} />
					<Route path="cart" element={<Cart />}></Route>
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
