import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Category from "./pages/Category/Category";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

function App() {
	return (
		<BrowserRouter>
			<Header />
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="product/:id" element={<Product />}></Route>
					<Route path="category/:category" element={<Category />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
