import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="product/:id" element={<Product />}>
					{/* <Route path="category" element={<ProductsCategory />} /> */}
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
