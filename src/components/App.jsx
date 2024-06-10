import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import HomePage from '../pages/HomePage/HomePage'
import CatalogPage from '../pages/CatalogPage/CatalogPage'
import FavoritesPage from '../pages/FavoritesPage/FavoritesPage'

const App = () => {
	return (
		<Router>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/catalog' element={<CatalogPage />} />
				<Route path='/favorites' element={<FavoritesPage />} />
			</Routes>
		</Router>
	)
}

export default App
