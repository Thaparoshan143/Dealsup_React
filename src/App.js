import './App.css';
import Navbar from './Components/Navbar';
import Landing from "./Components/Landing"
import Home from "./Components/Home";
import Footer from "./Components/Footer";
import WhyUs from './Components/WhyUs';
import Login from './Components/Login';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Vendors from './Components/Vendors';
import Suppliers from './Components/Suppliers';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/*" element={<Landing />} />
					<Route path="/home" element={<Home />} />
					<Route path="/vendors" element={<Vendors />} />
					<Route path="/suppliers" element={<Suppliers />} />
					<Route path="/whydealsup" element={<WhyUs />} />
					<Route path="/login" element={<Login />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;