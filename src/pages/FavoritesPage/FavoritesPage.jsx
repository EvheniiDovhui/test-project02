import { useSelector } from 'react-redux'
import CamperCard from '../../components/CamperCard/CamperCard'

const FavoritesPage = () => {
	const favorites = useSelector(state => state.campers.favorites)

	return (
		<div>
			<h2>My Favorites</h2>
			<div className='campers-list'>
				{favorites.map(camper => (
					<CamperCard key={camper.id} camper={camper} />
				))}
			</div>
		</div>
	)
}

export default FavoritesPage
