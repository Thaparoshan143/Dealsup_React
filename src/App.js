import './App.css';
import Navbar from './Components/Navbar';
import Landing from "./Components/Landing"
import Home from "./Components/Home";
import Footer from "./Components/Footer";

import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Navbar />
				<Routes>
					<Route path="/*" element={<Landing />} />
					<Route path="/home" element={<Home />} />
				</Routes>
				<Footer />
			</div>
		</BrowserRouter>
	);
}

export default App;